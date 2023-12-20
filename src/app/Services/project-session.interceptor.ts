import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from './Projects/project.service';

@Injectable()
export class ProjectSessionInterceptor implements HttpInterceptor {
  constructor(private projectService: ProjectService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const projectId = this.projectService.getActiveProject()?.id ?? 0;

    console.log('ProjectSessionInterceptor: ' + projectId);
    console.log('ProjectSessionInterceptor: ' + request.url);

    // replace the project id in the url with the active project id
    request = request.clone({
      url: request.url.replace('-123456789', projectId.toString()),
    });

    console.log('ProjectSessionInterceptor: ' + request.url);

    return next.handle(request);
  }
}
