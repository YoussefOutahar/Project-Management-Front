import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/Tasks/tasks.service';
import { Observable } from 'rxjs';
import { Task } from '../../Services/Tasks/Interfaces';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css'],
})
export class TasksPageComponent implements OnInit {
  tasks: Task[] = [];
  infoTask: Task | undefined;

  infoVisible: boolean = false;

  constructor(private taskService: TaskService) {
    this.taskService.getAllTasks().then((data) => {
      this.tasks = data;
    });
  }

  ngOnInit() {}

  getTaskSeverity(status: string) {
    switch (status) {
      case 'DONE':
        return 'success';
      case 'TODO':
        return 'warning';
      case 'IN_PROGRESS':
        return 'danger';
      default:
        return 'info';
    }
  }

  showInfoDialog(task: Task) {
    this.infoTask = task;
    this.infoVisible = true;
  }
}
