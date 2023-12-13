import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-activity-network-page',
  templateUrl: './activity-network-page.component.html',
  styleUrls: ['./activity-network-page.component.css'],
})
export class ActivityNetworkPageComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  constructor() {}

  ngOnInit() {
    this.items = [{ label: 'Dashboard' }, { label: 'Computer' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
