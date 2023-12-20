import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavItem } from '../Layout/Components/side-bar/nav-item/nav-item';

@Injectable({ providedIn: 'root' })
export class NavService {
  public currentUrl = new BehaviorSubject<any>(undefined);

  constructor(private router: Router) {
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
      displayName: 'Trello',
      iconName: 'layout-kanban',
      route: '/dashboard/trello',
    },
    {
      displayName: 'Budget',
      iconName: 'currency-dollar',
      route: '/dashboard/budget',
    },
    {
      displayName: 'Gantt',
      iconName: 'chart-arrows',
      route: '/dashboard/gantt',
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
    {
      displayName: 'Calendar',
      iconName: 'calendar',
      route: '/dashboard/calendar',
    },
    {
      displayName: 'Risk Register',
      iconName: 'alert-circle',
      route: '/dashboard/risk-register',
    },
    {
      displayName: 'RACI Matrix',
      iconName: 'grid-4x4',
      route: '/dashboard/raci-matrix',
    },
  ];
}
