import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Config/constants';
import { Observable } from 'rxjs';
import { Board, Card, List } from './TrelloModels';
import { ProjectService } from '../Projects/project.service';
import { ApiEndpointsService } from '../api-endpoints.service';

@Injectable({
  providedIn: 'root',
})
export class TrelloService {
  constructor(
    private http: HttpClient,
    private projectService: ProjectService,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  getActiveProjectBoards(): Observable<Board[]> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.get<Board[]>(
      this.apiEndpointsService.getTrelloApiUrl() + 'get/boards/all'
    );
  }

  addBoard(board: Board): Observable<Board> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.post<Board>(
      this.apiEndpointsService.getTrelloApiUrl() + 'create/board',
      board
    );
  }

  updateBoard(board: Board): Observable<Board> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.put<Board>(
      this.apiEndpointsService.getTrelloApiUrl() + 'update/board/' + board.id,
      board
    );
  }

  deleteBoard(boardId: number): Observable<boolean> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.delete<boolean>(
      this.apiEndpointsService.getTrelloApiUrl() + 'delete/board/' + boardId
    );
  }

  getBoardLists(boardId: number): Observable<List[]> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.get<List[]>(
      this.apiEndpointsService.getTrelloApiUrl() + 'get/lists/' + boardId
    );
  }

  addList(list: List, boardId: number): Observable<List> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.post<List>(
      this.apiEndpointsService.getTrelloApiUrl() + 'create/list/' + boardId,
      list
    );
  }

  updateList(list: List): Observable<List> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.put<List>(
      this.apiEndpointsService.getTrelloApiUrl() + 'update/list/' + list.id,
      list
    );
  }

  deleteList(listId: number): Observable<boolean> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.delete<boolean>(
      this.apiEndpointsService.getTrelloApiUrl() + 'delete/list/' + listId
    );
  }

  getListsCards(listId: number): Observable<Card[]> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.get<Card[]>(
      this.apiEndpointsService.getTrelloApiUrl() + 'get/cards/' + listId
    );
  }

  addCard(card: Card, listId: number): Observable<Card> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.post<Card>(
      this.apiEndpointsService.getTrelloApiUrl() + 'create/card/' + listId,
      card
    );
  }

  updateCard(card: Card): Observable<Card> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.put<Card>(
      this.apiEndpointsService.getTrelloApiUrl() + 'update/card/' + card.id,
      card
    );
  }
}
