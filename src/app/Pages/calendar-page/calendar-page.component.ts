import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../Services/events.service';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!

import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css'],
  providers: [EventsService],
})
export class CalendarPageComponent implements OnInit {
  events: any[] = [];

  options: any;

  header: any;

  constructor(private eventService: EventsService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.options = {
      ...this.options,
      ...{ events: this.events },
    };
    this.options = {
      initialDate: '2019-01-01',
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
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      themeSystem: 'bootstrap5',
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
    };
  }
}
