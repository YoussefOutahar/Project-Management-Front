import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Config/constants';
import { Observable } from 'rxjs';
import { Board, List } from './TrelloModels';
import { ProjectService } from '../Projects/project.service';

@Injectable({
  providedIn: 'root',
})
export class TrelloService {
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

  updateBoard(board: Board): Observable<Board> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.put<Board>(
      Constants.getTrelloApiUrl(projectId ?? 0) + 'update/board/' + board.id,
      board
    );
  }

  deleteBoard(boardId: number): Observable<boolean> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.delete<boolean>(
      Constants.getTrelloApiUrl(projectId ?? 0) + 'delete/board/' + boardId
    );
  }

  getBoardLists(boardId: number): Observable<List[]> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.get<List[]>(
      Constants.getTrelloApiUrl(projectId ?? 0) +
        'get/board/' +
        boardId +
        '/lists'
    );
  }

  addList(list: List, boardId: number): Observable<List> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.post<List>(
      Constants.getTrelloApiUrl(projectId ?? 0) +
        'create/board/' +
        boardId +
        '/list',
      list
    );
  }
}
