import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../Config/constants';

@Injectable({
  providedIn: 'root',
})
export class TrelloService {
  publicUrlProjects = Constants.API_URL_PROJECTS;

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.put(this.publicUrlProjects + 'get/all', {});
  }
}
