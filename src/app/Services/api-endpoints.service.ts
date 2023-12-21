import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiEndpointsService {
  // API
  public readonly API_URL: string = 'http://localhost:8082/api/v1/';
  public readonly API_URL_AUTH: string = this.API_URL + 'auth/';
  public readonly API_URL_PROJECTS: string = this.API_URL + 'projects/';

  projectGUID: string = 'E2171A7B-FE22-41AD-A20C-08451EB14095';

  constructor() {}

  public getTrelloApiUrl(): string {
    return this.API_URL + this.projectGUID + '/trello/';
  }

  public getBudgetApiUrl(): string {
    return this.API_URL + this.projectGUID + '/budget/';
  }

  public getTasksApiUrl(): string {
    return this.API_URL + this.projectGUID + '/tasks/';
  }

  public getLinksApiUrl(): string {
    return this.API_URL + this.projectGUID + '/links/';
  }

  public getUsersApiUrl(): string {
    return this.API_URL + this.projectGUID + '/users/';
  }
}
