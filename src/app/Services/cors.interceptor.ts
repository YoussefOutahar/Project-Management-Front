import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../Config/constants';
import { ApiEndpointsService } from './api-endpoints.service';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  constructor(private apiEndpointsService: ApiEndpointsService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes(this.apiEndpointsService.API_URL_AUTH)) {
      return next.handle(request);
    }
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        accept: '*/*',
      },
    });
    return next.handle(request);
  }
}
