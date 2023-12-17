import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Config/constants';
import { Observable } from 'rxjs';
import { Board } from './TrelloModels';
import { ProjectService } from '../Projects/project.service';

@Injectable({
  providedIn: 'root',
})
export class TrelloService {
  publicUrlProjects = Constants.API_URL_PROJECTS;

  constructor(
    private http: HttpClient,
    private projectService: ProjectService
  ) {}

  getActiveProjectBoards(): Observable<Board[]> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.get<Board[]>(
      Constants.getTrelloApiUrl(projectId ?? 0) + 'get/boards/all'
    );
  }

  addBoard(board: Board): Observable<Board> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.post<Board>(
      Constants.getTrelloApiUrl(projectId ?? 0) + 'create/board  ',
      board
    );
  }
}
