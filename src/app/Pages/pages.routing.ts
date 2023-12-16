import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OfficePageComponent } from './office-page/office-page.component';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { GanttPageComponent } from './gantt-page/gantt-page.component';
import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { ActivityNetworkPageComponent } from './activity-network-page/activity-network-page.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { RiskRegisterPageComponent } from './risk-register-page/risk-register-page.component';
import { RaciMatrixPageComponent } from './raci-matrix-page/raci-matrix-page.component';
import { authGuard } from '../Auth/auth.guard';
import { TrelloComponent } from './Trello/trello.component';
import { ProjectSelectedGuard } from '../Services/Projects/projects-selected.guard';

export const pageRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
  {
    path: 'trello',
    component: TrelloComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
  {
    path: 'office',
    component: OfficePageComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
  {
    path: 'budget',
    component: BudgetPageComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
  {
    path: 'gantt',
    component: GanttPageComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
  {
    path: 'ressources',
    component: ResourcesPageComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
  {
    path: 'activity-network',
    component: ActivityNetworkPageComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
  {
    path: 'reports',
    component: ReportsPageComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
  {
    path: 'calendar',
    component: CalendarPageComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
  {
    path: 'risk-register',
    component: RiskRegisterPageComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
  {
    path: 'raci-matrix',
    component: RaciMatrixPageComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
];
