import { NgModule } from '@angular/core';
import { ProjectsComponent } from './Projects.component';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../UI-Modules/primeNg.module';

import { projectRoutes } from './projects.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../UI-Modules/material.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule,MaterialModule , PrimeNgModule, RouterModule.forChild(projectRoutes)],
  providers: [],
  exports: [],
})
export class ProjectsModule {}
