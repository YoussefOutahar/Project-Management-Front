import { Component, OnInit, inject } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ProjectService } from '../Services/Projects/project.service';
import { Project } from '../Services/Projects/Interfaces';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddProjectDialogueComponent } from './Components/add-project-dialogue/add-project-dialogue.component';
import { Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service';
import { EditProjectDialogueComponent } from './Components/edit-project-dialogue/edit-project-dialogue.component';

@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.scss'],
  providers: [DialogService],
})
export class ProjectsComponent implements OnInit {
  items: MenuItem[] | undefined;

  ref: DynamicDialogRef | undefined;
  projectCards: Project[] = [];

  constructor(
    private projectService: ProjectService,
    public dialogService: DialogService, // public messageService: MessageService
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];

    this.projectService.removeDashboardSession();
    this.projectService.getProjects().subscribe((data: any) => {
      this.projectCards = data;
    });
  }

  async handleAddNewProject() {
    this.ref = this.dialogService.open(AddProjectDialogueComponent, {
      header: 'Add a project',
      footer: 'YoraStd',
      width: '50vw',
      modal: true,
    });

    this.ref.onClose.subscribe((data: any) => {
      console.log(data);
      this.projectService.createProject(data).subscribe((data: any) => {
        this.projectCards.push(data);
      });
      // this.messageService.add({
      //   severity: 'info',
      //   summary: 'Product Selected',
      //   detail: data.name,
      // });
    });
  }

  async handleCardClick(project: Project) {
    this.projectService.setupDashboardSession(project);
    this.router.navigate(['/dashboard']);
  }
  async handleDeleteProject(project: Project, $event: any) {
    $event.stopPropagation();
    this.projectService.deleteProject(project).subscribe((data: any) => {
      this.projectCards = this.projectCards.filter(
        (projectCard) => projectCard.id !== project.id
      );
    });
  }
  async handleEditProject(project: Project, $event: any) {
    $event.stopPropagation();
    this.ref = this.dialogService.open(EditProjectDialogueComponent, {
      header: 'Edit a project',
      footer: 'YoraStd',
      width: '50vw',
      modal: true,
      data: project,
    });

    this.ref.onClose.subscribe((data: any) => {
      this.projectService.updateProject(data).subscribe((data: any) => {
        this.projectCards = this.projectCards.filter(
          (projectCard) => projectCard.id !== data.id
        );
        this.projectCards.push(data);
      });
    });
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

  convertTimestampToDate(timestamp: number) {
    return new Date(timestamp).toLocaleDateString();
  }
}
