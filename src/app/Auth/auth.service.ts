import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from '../Config/constants';
import { HttpClient } from '@angular/common/http';

import { LoginRequest } from './Interfaces/LoginRequest';
import { RegisterRequest } from './Interfaces/RegisterRequest';
import { TokenResponse } from './Interfaces/TokenResponse';
import { ApiEndpointsService } from '../Services/api-endpoints.service';
import { User } from './Interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  login(email: string, password: string): void {
    // Sett Session and token
    console.log('Login In');

    const data: LoginRequest = {
      email: email,
      password: password,
    };

    this.http
      .post<TokenResponse>(
        this.apiEndpointsService.API_URL_AUTH + 'authenticate',
        data
      )
      .subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('access_token', res.access_token);
          localStorage.setItem('refresh_token', res.refresh_token);
          this.router.navigate(['/dashboard']);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  me(): Observable<User> {
    return this.http.post<User>(
      this.apiEndpointsService.API_URL_AUTH + 'me',
      {}
    );
  }
}
