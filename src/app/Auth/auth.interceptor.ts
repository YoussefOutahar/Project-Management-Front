import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Constants } from '../Config/constants';
import { ApiEndpointsService } from '../Services/api-endpoints.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private apiEndpointsService: ApiEndpointsService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes(this.apiEndpointsService.API_URL_AUTH)) {
      if (request.url.includes('/me')) {
        const token = localStorage.getItem('access_token');
        if (token) {
          request = request.clone({
            setParams: {
              access_token: `${token}`,
            },
          });
        }
      }
      return next.handle(request);
    }
    const token = localStorage.getItem('access_token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}
