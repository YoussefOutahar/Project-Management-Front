import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/Tasks/tasks.service';
import { Observable } from 'rxjs';
import { Task } from '../../Services/Tasks/Interfaces';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css'],
})
export class TasksPageComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.taskService.getAllTasks().then((data) => {
      this.tasks = data;
    });
  }

  ngOnInit() {}
}
