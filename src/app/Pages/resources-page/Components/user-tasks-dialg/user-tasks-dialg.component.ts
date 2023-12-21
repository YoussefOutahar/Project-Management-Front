import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../Services/Tasks/tasks.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Task } from '../../../../Services/Tasks/Interfaces';

@Component({
  selector: 'app-user-tasks-dialg',
  templateUrl: './user-tasks-dialg.component.html',
  styleUrls: ['./user-tasks-dialg.component.css'],
})
export class UserTasksDialgComponent implements OnInit {
  tasks: Task[] = [];
  allTasks: Task[] = [];
  selectedTask: Task | undefined;

  constructor(
    private taskService: TaskService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.taskService.getUserTasks(this.config.data.id).subscribe((data) => {
      this.tasks = data;
    });
    this.taskService.getAllTasks().then((data) => {
      this.allTasks = data;
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

  addTask() {
    this.taskService
      .assignTask(this.selectedTask?.id!, this.config.data.id)
      .subscribe((data) => {
        this.tasks.push(data);
      });
  }

  deleteTask(task: Task) {
    this.taskService
      .unassignTask(task.id!, this.config.data.id)
      .subscribe((data) => {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      });
  }
}
