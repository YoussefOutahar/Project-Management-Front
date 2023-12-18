import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectService } from '../Projects/project.service';
import { Constants } from '../../Config/constants';
import { HumanResources } from './Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  constructor(
    private http: HttpClient,
    private projectService: ProjectService
  ) {}

  getActiveProjectResources(): Observable<HumanResources[]> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.get<any>(
      Constants.getBudgetApiUrl(projectId ?? 0) + 'human-resources/get/all'
    );
  }

  createResource(resource: HumanResources): Observable<HumanResources> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.post<HumanResources>(
      Constants.getBudgetApiUrl(projectId ?? 0) + 'human-resources/create',
      resource
    );
  }

  updateResource(resource: HumanResources): Observable<HumanResources> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.put<HumanResources>(
      Constants.getBudgetApiUrl(projectId ?? 0) + 'human-resources/update',
      resource
    );
  }

  deleteResource(resource: HumanResources): Observable<HumanResources> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.delete<HumanResources>(
      Constants.getBudgetApiUrl(projectId ?? 0) +
        'human-resources/delete/' +
        resource.id
    );
  }
}
