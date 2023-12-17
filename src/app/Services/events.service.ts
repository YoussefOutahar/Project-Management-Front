import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return [
      {
        title: 'All Day Event',
        start: '2019-01-01',
      },
      {
        title: 'Long Event',
        start: '2019-01-07',
        end: '2019-01-10',
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2019-01-09T16:00:00',
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2019-01-16T16:00:00',
      },
      {
        title: 'Conference',
        start: '2019-01-11',
        end: '2019-01-13',
      },
      {
        title: 'Meeting',
        start: '2019-01-12T10:30:00',
        end: '2019-01-12T12:30:00',
      },
      {
        title: 'Lunch',
        start: '2019-01-12T12:00:00',
      },
      {
        title: 'Meeting',
        start: '2019-01-12T14:30:00',
      },
      {
        title: 'Birthday Party',
        start: '2019-01-13T07:00:00',
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2019-01-28',
      },
    ];
  }
}
