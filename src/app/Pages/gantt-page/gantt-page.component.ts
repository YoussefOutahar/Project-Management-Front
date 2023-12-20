import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Gantt, GanttStatic, gantt } from 'dhtmlx-gantt';
import { TaskService } from '../../Services/Tasks/tasks.service';
import { LinkService } from '../../Services/Tasks/link.service';
import { ProjectService } from '../../Services/Projects/project.service';
import { Link, Task } from '../../Services/Tasks/Interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gantt-page',

  encapsulation: ViewEncapsulation.None,
  templateUrl: './gantt-page.component.html',
  styleUrls: ['./gantt-page.component.css'],
  providers: [TaskService, LinkService, ProjectService],
})
export class GanttPageComponent implements OnInit {
  @ViewChild('gantt_here', { static: true }) ganttContainer!: ElementRef;

  constructor(
    private taskService: TaskService,
    private linkService: LinkService
  ) {}

  ngOnInit() {
    gantt.config.date_format = '%Y-%m-%d %H:%i';

    gantt.init(this.ganttContainer.nativeElement);

    if (!(gantt as any).$_initOnce) {
      (gantt as any).$_initOnce = true;

      const dp = gantt.createDataProcessor({
        task: {
          update: (data: Task) => this.taskService.updateTask(data),
          create: (data: Task) => this.taskService.createTask(data),
          delete: (id: any) => this.taskService.deleteTask(id),
        },
        link: {
          update: (data: Link) => this.linkService.updateLink(data),
          create: (data: Link) => this.linkService.createLink(data),
          delete: (id: any) => this.linkService.deleteLink(id),
        },
      });
    }

    Promise.all([
      this.taskService.getAllTasks(),
      this.linkService.getAllLinks(),
    ]).then(([data, links]) => {
      gantt.parse({ data, links });
    });

    // this.taskService.getAllTasks().then((data) => {
    //   gantt.parse({ data });
    // });

    // this.linkService.getAllLinks().then((links) => {
    //   gantt.parse({ links });
    // });
  }
}
