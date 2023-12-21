import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../Services/nav.service';
import { NavItem } from './nav-item/nav-item';
import { AuthService } from '../../../Auth/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {
  navItems: NavItem[] = [];

  constructor(public navService: NavService, private authService: AuthService) {
    this.authService.me().subscribe((user) => {
      this.navItems = this.navService.getNavItemsForRole(user.role);
    });
  }

  ngOnInit(): void {}
}
