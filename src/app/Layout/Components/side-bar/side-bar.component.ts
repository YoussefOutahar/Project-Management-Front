import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../Services/nav.service';
import { NavItem } from './nav-item/nav-item';
@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {
  navItems: NavItem[];

  constructor(public navService: NavService) {
    this.navItems = this.navService.getNavItems();
  }

  ngOnInit(): void {}
}
