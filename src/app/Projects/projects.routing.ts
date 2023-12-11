import { Routes } from '@angular/router';
import { ProjectsComponent } from './Projects.component';
import { authGuard } from '../Auth/auth.guard';

export const projectRoutes: Routes = [
  {
    path: 'all-projects',
    component: ProjectsComponent,
    canActivate: [authGuard],
  },
];
