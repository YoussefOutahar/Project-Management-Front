import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  items: MenuItem[] | undefined;

  cards = [
    { title: 'Card 1', description: 'This is card 1', imageUrl: '...' },
    { title: 'Card 2', description: 'This is card 2', imageUrl: '...' },
    { title: 'Card 3', description: 'This is card 3', imageUrl: '...' },
    { title: 'Card 3', description: 'This is card 3', imageUrl: '...' },
    { title: 'Card 3', description: 'This is card 3', imageUrl: '...' },
    { title: 'Card 3', description: 'This is card 3', imageUrl: '...' },
    { title: 'Card 3', description: 'This is card 3', imageUrl: '...' },
    { title: 'Card 3', description: 'This is card 3', imageUrl: '...' },
    { title: 'Card 3', description: 'This is card 3', imageUrl: '...' },
    { title: 'Card 3', description: 'This is card 3', imageUrl: '...' },
    // ...
  ];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload',
      },
    ];
  }
}
