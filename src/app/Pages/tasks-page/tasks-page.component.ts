import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/Tasks/tasks.service';
import { Observable } from 'rxjs';
import { Task } from '../../Services/Tasks/Interfaces';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TaskCommentsComponent } from './task-comments/task-comments.component';
import { AuthService } from '../../Auth/auth.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css'],
  providers: [DialogService],
})
export class TasksPageComponent implements OnInit {
  tasks: Task[] = [];
  infoTask: Task | undefined;

  infoVisible: boolean = false;

  commentsRef: DynamicDialogRef | undefined;

  constructor(
    private authService: AuthService,
    private taskService: TaskService,
    public dialogService: DialogService
  ) {
    this.authService.me().subscribe((data) => {
      if (data.role !== 'ADMIN' && data.role !== 'MANAGER') {
        this.taskService.getUserTasks(data.id).subscribe((data) => {
          this.tasks = data;
        });
      } else {
        this.taskService.getAllTasks().then((data) => {
          this.tasks = data;
        });
      }
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

  viewComments(task: Task) {
    this.commentsRef = this.dialogService.open(TaskCommentsComponent, {
      header: 'Task Comments',
      footer: 'YoraStd',
      width: '50vw',
      modal: true,
      data: task,
    });

    this.commentsRef.onClose.subscribe((data: any) => {
      console.log(data);
    });
  }
}
