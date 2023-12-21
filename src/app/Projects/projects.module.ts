import { NgModule } from '@angular/core';
import { ProjectsComponent } from './Projects.component';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../UI-Modules/primeNg.module';

import { projectRoutes } from './projects.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../UI-Modules/material.module';
import { AddProjectDialogueComponent } from './Components/add-project-dialogue/add-project-dialogue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProjectDialogueComponent } from './Components/edit-project-dialogue/edit-project-dialogue.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    AddProjectDialogueComponent,
    EditProjectDialogueComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(projectRoutes),
  ],
  providers: [],
  exports: [],
})
export class ProjectsModule {}
