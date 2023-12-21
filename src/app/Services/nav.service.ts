import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavItem } from '../Layout/Components/side-bar/nav-item/nav-item';
import { AuthService } from '../Auth/auth.service';

@Injectable({ providedIn: 'root' })
export class NavService {
  public currentUrl = new BehaviorSubject<any>(undefined);

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  getNavItems = (): NavItem[] => {
    return this.navItems;
  };

  navItems: NavItem[] = [
    {
      displayName: 'Office',
      iconName: 'home',
      route: '/dashboard/office',
    },
    {
      displayName: 'Tasks',
      iconName: 'activity',
      route: '/dashboard/tasks',
    },
    {
      displayName: 'Calendar',
      iconName: 'calendar',
      route: '/dashboard/calendar',
    },
    {
      displayName: 'Gantt',
      iconName: 'chart-arrows',
      route: '/dashboard/gantt',
    },
    {
      displayName: 'Budget',
      iconName: 'currency-dollar',
      route: '/dashboard/budget',
    },

    {
      displayName: 'Ressources',
      iconName: 'users',
      route: '/dashboard/ressources',
    },
    {
      displayName: 'Reports',
      iconName: 'report',
      route: '/dashboard/reports',
    },
  ];
}
