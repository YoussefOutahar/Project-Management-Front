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
      displayName: 'Trello',
      iconName: 'home',
      route: '/dashboard/trello',
    },
    {
      displayName: 'Budget',
      iconName: 'money',
      route: '/dashboard/budget',
    },
    {
      displayName: 'Gantt',
      iconName: 'calendar',
      route: '/dashboard/gantt',
    },
    {
      displayName: 'Ressources',
      iconName: 'people',
      route: '/dashboard/ressources',
    },
    {
      displayName: 'Activity Network',
      iconName: 'link',
      route: '/dashboard/activity-network',
    },
    {
      displayName: 'Reports',
      iconName: 'list',
      route: '/dashboard/reports',
    },
    {
      displayName: 'Calendar',
      iconName: 'calendar',
      route: '/dashboard/calendar',
    },
    {
      displayName: 'Risk Register',
      iconName: 'list',
      route: '/dashboard/risk-register',
    },
    {
      displayName: 'RACI Matrix',
      iconName: 'list',
      route: '/dashboard/raci-matrix',
    },
  ];
}
