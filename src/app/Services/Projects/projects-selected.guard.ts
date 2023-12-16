import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ProjectService } from './project.service';

export const ProjectSelectedGuard: CanActivateFn = (route, state) => {
  var isProjectSelected: boolean =
    inject(ProjectService).checkIfProjectIsSelected();

  if (!isProjectSelected) {
    console.log('ProjectSelectedGuard: No project selected');
    inject(Router).navigate(['/projects/all-projects']);
  }

  if (isProjectSelected) {
    console.log('ProjectSelectedGuard: Project selected');
    console.log('Active Project' + inject(ProjectService).activeProject);
  }

  return isProjectSelected;
};
