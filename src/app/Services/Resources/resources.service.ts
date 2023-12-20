import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectService } from '../Projects/project.service';
import { Constants } from '../../Config/constants';
import { HumanResources } from './Interfaces';
import { Observable } from 'rxjs';
import { ApiEndpointsService } from '../api-endpoints.service';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  constructor(
    private http: HttpClient,
    private projectService: ProjectService,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  getActiveProjectResources(): Observable<HumanResources[]> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.get<any>(
      this.apiEndpointsService.getBudgetApiUrl() + 'human-resources/get/all'
    );
  }

  createResource(resource: HumanResources): Observable<HumanResources> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.post<HumanResources>(
      this.apiEndpointsService.getBudgetApiUrl() + 'human-resources/create',
      resource
    );
  }

  updateResource(resource: HumanResources): Observable<HumanResources> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.put<HumanResources>(
      this.apiEndpointsService.getBudgetApiUrl() + 'human-resources/update',
      resource
    );
  }

  deleteResource(resource: HumanResources): Observable<HumanResources> {
    const projectId = this.projectService.getActiveProject()?.id;
    return this.http.delete<HumanResources>(
      this.apiEndpointsService.getBudgetApiUrl() +
        'human-resources/delete/' +
        resource.id
    );
  }
}
