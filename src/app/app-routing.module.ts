import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './Layout/layout.component';
import { BlankComponent } from './Layout/blank/blank.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'projects',
        redirectTo: '/projects/all-projects',
        pathMatch: 'full',
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./Projects/projects.module').then((m) => m.ProjectsModule),
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', redirectTo: '/dashboard/tasks', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./Pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'session',
        redirectTo: '/session/authenticate',
        pathMatch: 'full',
      },
      {
        path: 'session',
        loadChildren: () =>
          import('./Auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
