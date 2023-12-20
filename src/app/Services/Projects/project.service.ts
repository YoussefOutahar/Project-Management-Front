import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './Interfaces';
import { ApiEndpointsService } from '../api-endpoints.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private activeProject: Project | undefined;

  constructor(
    private http: HttpClient,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  getProjects() {
    return this.http.get(this.apiEndpointsService.API_URL_PROJECTS + 'get/all');
  }

  createProject(project: Project) {
    return this.http.post(
      this.apiEndpointsService.API_URL_PROJECTS + 'create',
      project
    );
  }

  deleteProject(project: Project) {
    return this.http.delete(
      this.apiEndpointsService.API_URL_PROJECTS + 'delete/' + project.id
    );
  }

  setupDashboardSession(project: Project) {
    this.activeProject = project;
  }

  removeDashboardSession() {
    console.log('Removing dashboard session');
    this.activeProject = undefined;
  }

  getActiveProject(): Project | undefined {
    console.log('Getting active project:', this.activeProject);
    return this.activeProject;
  }

  checkIfProjectIsSelected(): boolean {
    return this.activeProject !== undefined;
  }
}
