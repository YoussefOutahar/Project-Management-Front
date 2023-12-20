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

  projectGUID: string = 'E2171A7B-FE22-41AD-A20C-08451EB14095';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const projectId = this.projectService.getActiveProject()?.id ?? 0;

    // replace the project id in the url with the active project id
    request = request.clone({
      url: request.url.replace(this.projectGUID, projectId.toString()),
    });

    return next.handle(request);
  }
}
