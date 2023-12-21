import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../Services/Tasks/tasks.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-user-tasks-dialg',
  templateUrl: './user-tasks-dialg.component.html',
  styleUrls: ['./user-tasks-dialg.component.css'],
})
export class UserTasksDialgComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {}
}
