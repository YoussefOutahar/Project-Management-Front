import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ProjectService } from '../Services/Projects/project.service';
import { Project } from '../Services/Projects/Interfaces';

@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  items: MenuItem[] | undefined;

  projectCards: Project[] = [];

  constructor(private projectService: ProjectService) {}

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

    this.projectService.getProjects().subscribe((data: any) => {
      console.log(data);
      this.projectCards = data;
    });
  }

  async handleAddNewProject() {
    this.projectService
      .createProject({
        id: 0,
        name: 'Test Project',
        description: 'Test Description',
        budget: 1000,
        startDate: new Date().getTime(),
        endDate: new Date().getTime(),
        createdAt: new Date().getTime(),
        completed: false,
      })
      .subscribe((data: any) => {
        console.log(data);
        this.projectCards.push(data);
      });
  }

  async handleDeleteProject(project: Project[]) {}

  convertTimestampToDate(timestamp: number) {
    return new Date(timestamp).toLocaleDateString();
  }
}
