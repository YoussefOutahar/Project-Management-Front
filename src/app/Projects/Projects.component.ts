import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
})
export class ProjectsComponent implements OnInit {
  items: MenuItem[] | undefined;

  breakpoint: number | undefined;

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

    this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 6;
  }
}
