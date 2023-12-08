import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../Config/constants';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('intercepted request by CORS interceptor ... ');
    if (request.url.includes(Constants.API_URL_AUTH)) {
      console.log('Auth request');
      console.log('Disgarding token');
      return next.handle(request);
    }
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        accept: '*/*',
      },
    });
    console.log('Sending request with new CORS header now ...');
    console.log(request);
    return next.handle(request);
  }
}
