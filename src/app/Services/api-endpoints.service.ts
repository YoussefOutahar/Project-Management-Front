import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiEndpointsService {
  // API
  public readonly API_URL: string = 'http://localhost:8082/api/v1/';
  public readonly API_URL_AUTH: string = this.API_URL + 'auth/';
  public readonly API_URL_PROJECTS: string = this.API_URL + 'projects/';

  constructor() {}

  public getTrelloApiUrl(): string {
    return this.API_URL + '-123456789' + '/trello/';
  }

  public getBudgetApiUrl(): string {
    return this.API_URL + '-123456789' + '/budget/';
  }

  public getTasksApiUrl(): string {
    return this.API_URL + '-123456789' + '/tasks/';
  }

  public getLinksApiUrl(): string {
    return this.API_URL + '-123456789' + '/links/';
  }
}
