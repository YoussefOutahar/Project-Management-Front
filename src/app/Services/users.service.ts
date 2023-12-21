import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpointsService } from './api-endpoints.service';
import { User } from '../Auth/Interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private apiEndpointService: ApiEndpointsService
  ) {}

  getUsers() {
    return this.http.get<User[]>(
      this.apiEndpointService.getUsersApiUrl() + 'get/all'
    );
  }
}
