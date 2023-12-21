import { Routes } from '@angular/router';
import { OfficePageComponent } from './office-page/office-page.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { GanttPageComponent } from './gantt-page/gantt-page.component';
import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { authGuard } from '../Auth/auth.guard';
import { TrelloComponent } from './Trello/trello.component';
import { ProjectSelectedGuard } from '../Services/Projects/projects-selected.guard';

export const pageRoutes: Routes = [
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
    path: 'tasks',
    component: TasksPageComponent,
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
    path: 'reports',
    component: ReportsPageComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
  {
    path: 'calendar',
    component: CalendarPageComponent,
    canActivate: [authGuard, ProjectSelectedGuard],
  },
];
