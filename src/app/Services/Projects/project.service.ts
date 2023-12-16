import { Injectable } from '@angular/core';
import { Constants } from '../../Config/constants';
import { HttpClient } from '@angular/common/http';
import { Project } from './Interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  publicUrlProjects = Constants.API_URL_PROJECTS;

  activeProject: Project | undefined;

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get(this.publicUrlProjects + 'get/all');
  }

  createProject(project: Project) {
    return this.http.post(this.publicUrlProjects + 'create', project);
  }

  deleteProject(project: Project) {
    return this.http.delete(this.publicUrlProjects + 'delete/' + project.id);
  }

  setupDashboardSession(project: Project) {
    this.activeProject = project;
  }

  removeDashboardSession() {
    this.activeProject = undefined;
  }

  checkIfProjectIsSelected(): boolean {
    return this.activeProject !== undefined;
  }
}
