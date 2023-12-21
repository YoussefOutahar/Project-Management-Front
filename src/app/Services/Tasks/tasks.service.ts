import { Injectable } from '@angular/core';
import { Task, Comment } from './Interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { ProjectService } from '../Projects/project.service';
import { HandleError } from '../helpers';
import { ApiEndpointsService } from '../api-endpoints.service';
import { AuthService } from '../../Auth/auth.service';
import { User } from '../../Auth/Interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  currentUser: User | undefined;

  constructor(
    private projectService: ProjectService,
    private apiEndpointsService: ApiEndpointsService,
    private authService: AuthService,
    private http: HttpClient
  ) {
    this.authService.me().subscribe((data: any) => {
      this.currentUser = data;
    });
  }

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

  getUserTasks(userId: number) {
    return this.http.get<Task[]>(
      this.apiEndpointsService.getTasksApiUrl() + 'user/' + userId
    );
  }

  assignTask(taskId: number, userId: number) {
    return this.http.post(
      this.apiEndpointsService.getTasksApiUrl() +
        'assign/' +
        taskId +
        '/' +
        userId,
      {}
    );
  }

  unassignTask(taskId: number, userId: number) {
    return this.http.post(
      this.apiEndpointsService.getTasksApiUrl() +
        'unassign/' +
        taskId +
        '/' +
        userId,
      {}
    );
  }

  getTaskComments(taskId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      this.apiEndpointsService.getTasksApiUrl() + 'comment/all/' + taskId
    );
  }

  createComment(taskId: string, task: Task, text: string) {
    var comment: Comment = {
      text: text,
      username: this.currentUser?.firstname + ' ' + this.currentUser?.lastname,
      commentatorId: this.currentUser!.id,
      commentatorRole: this.currentUser!.role,
      task: task,
    };

    return this.http.post(
      this.apiEndpointsService.getTasksApiUrl() + 'comment/create/' + taskId,
      comment
    );
  }
}
