import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../Services/Tasks/tasks.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Comment } from '../../../Services/Tasks/Interfaces';

@Component({
  selector: 'app-task-comments',
  templateUrl: './task-comments.component.html',
  styleUrls: ['./task-comments.component.css'],
  providers: [TaskService],
})
export class TaskCommentsComponent implements OnInit {
  comments: Comment[] | undefined;
  value: string | undefined;

  constructor(
    private taskService: TaskService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.getComments();
  }

  ngOnInit() {}

  async getComments() {
    this.taskService.getTaskComments(this.config.data.id).subscribe((data) => {
      this.comments = data;
    });
  }

  addComment() {
    console.log(this.value);
    if (this.value) {
      this.taskService.createComment(
        this.config.data.id,
        this.config.data,
        this.value
      );
      this.value = '';
      this.getComments();
    }
  }
}
