import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventInput,
} from '@fullcalendar/core';
import { TaskService } from '../../Services/Tasks/tasks.service';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!

import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { Task } from '../../Services/Tasks/Interfaces';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css'],
  providers: [TaskService],
})
export class CalendarPageComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
      bootstrap5Plugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    events: [],
    // eventsSet: this.handleEvents.bind(this),
    weekends: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    themeSystem: 'bootstrap5',
    editable: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  constructor(
    private taskService: TaskService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadEvents();
    this.changeDetector.detectChanges();
  }

  loadEvents() {
    this.taskService.getAllTasks().then((tasks) => {
      console.log(tasks);
      console.log(this.formatEvents(tasks));
      this.calendarOptions.events = this.formatEvents(tasks);
      this.changeDetector.detectChanges();
    });
  }

  formatEvents(tasks: Task[]) {
    return tasks.map(
      (task): EventInput => ({
        id: task.id!.toString(),
        title: `${task.text}`,
        start: task.start_date,
        color: this.darkColorRandomizerGenerator(),
      })
    );
  }
  darkColorRandomizerGenerator() {
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    // const title = prompt('Please enter a new title for your event');
    // const calendarApi = selectInfo.view.calendar;
    // calendarApi.unselect(); // clear date selection
    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
  }

  handleEventClick(clickInfo: EventClickArg) {
    // if (
    //   confirm(
    //     `Are you sure you want to delete the event '${clickInfo.event.title}'`
    //   )
    // ) {
    //   clickInfo.event.remove();
    // }
  }

  // handleEvents(events: EventApi[]) {
  //   this.currentEvents.set(events);
  //   this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  // }
}
