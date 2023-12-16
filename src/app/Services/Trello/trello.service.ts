import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Config/constants';
import { Observable } from 'rxjs';
import { Board } from './TrelloModels';

@Injectable({
  providedIn: 'root',
})
export class TrelloService {
  publicUrlProjects = Constants.API_URL_PROJECTS;

  constructor(private http: HttpClient) {}
}
