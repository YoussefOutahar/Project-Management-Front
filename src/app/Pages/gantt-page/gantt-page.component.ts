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

@Component({
  selector: 'app-gantt-page',

  encapsulation: ViewEncapsulation.None,
  templateUrl: './gantt-page.component.html',
  styleUrls: ['./gantt-page.component.css'],
  providers: [TaskService, LinkService],
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

    Promise.all([this.taskService.get(), this.linkService.get()]).then(
      ([data, links]) => {
        gantt.parse({ data, links });
      }
    );
  }
}
