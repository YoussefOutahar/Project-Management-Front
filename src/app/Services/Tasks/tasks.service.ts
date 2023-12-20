import { Injectable } from '@angular/core';
import { Task } from './Interfaces';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../Config/constants';
import { firstValueFrom } from 'rxjs';
import { ProjectService } from '../Projects/project.service';
import { HandleError } from '../helpers';
import { ApiEndpointsService } from '../api-endpoints.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(
    private projectService: ProjectService,
    private http: HttpClient,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  get(): Promise<Task[]> {
    return Promise.resolve([
      {
        id: 1,
        text: 'Task #1',
        start_date: '2023-11-15 00:00',
        duration: 3,
        progress: 0.6,
        parent: 0,
      },
      {
        id: 2,
        text: 'Task #2',
        start_date: '2023-11-18 00:00',
        duration: 3,
        progress: 0.4,
        parent: 0,
      },
    ]);
  }

  async getAllTasks() {
    const projectId = this.projectService.getActiveProject()?.id;
    try {
      return await firstValueFrom(
        this.http.get(this.apiEndpointsService.getTasksApiUrl() + 'all')
      );
    } catch (error) {
      return HandleError(error);
    }
  }

  async getTask(id: number) {
    try {
      return await firstValueFrom(
        this.http.get(this.apiEndpointsService.getTasksApiUrl() + 'get/' + id)
      );
    } catch (error) {
      return HandleError(error);
    }
  }

  async createTask(task: Task) {
    try {
      return await firstValueFrom(
        this.http.post(
          this.apiEndpointsService.getTasksApiUrl() + 'create',
          task
        )
      );
    } catch (error) {
      return HandleError(error);
    }
  }

  async updateTask(task: Task) {
    try {
      return await firstValueFrom(
        this.http.put(
          this.apiEndpointsService.getTasksApiUrl() + 'update',
          task
        )
      );
    } catch (error) {
      return HandleError(error);
    }
  }

  async deleteTask(id: number) {
    try {
      return await firstValueFrom(
        this.http.delete(
          this.apiEndpointsService.getTasksApiUrl() + 'delete/' + id
        )
      );
    } catch (error) {
      return HandleError(error);
    }
  }
}
