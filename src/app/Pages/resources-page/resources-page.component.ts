import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from '../../Auth/Interfaces/user';
import { UsersService } from '../../Services/users.service';
import { UserInfoDialgComponent } from './Components/user-info-dialg/user-info-dialg.component';
import { UserTasksDialgComponent } from './Components/user-tasks-dialg/user-tasks-dialg.component';

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.css'],
  providers: [DialogService],
})
export class ResourcesPageComponent implements OnInit {
  layout: string = 'list';

  resources!: User[];

  products!: any;

  ref: DynamicDialogRef | undefined;

  constructor(
    private usersService: UsersService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    // this.resourceService.getActiveProjectResources().subscribe((data) => {
    //   this.resources = data;
    //   console.log(this.resources);
    // });
    this.usersService.getUsers().subscribe((data) => {
      this.resources = data;
      console.log(this.resources);
    });
  }

  async handleInfoClick(user: User) {
    this.ref = this.dialogService.open(UserInfoDialgComponent, {
      header: 'Add a resource',
      footer: 'YoraStd',
      width: '50vw',
      modal: true,
    });

    this.ref.onClose.subscribe((data: any) => {
      // this.resourceService.createResource(data).subscribe((data) => {
      //   this.resources.push(data);
      // });
    });
  }

  async handleTasksClick(user: User) {
    this.ref = this.dialogService.open(UserTasksDialgComponent, {
      header: 'Edit resource',
      footer: 'YoraStd',
      width: '50vw',
      modal: true,
    });

    this.ref.onClose.subscribe((data: any) => {
      console.log(data);
    });
  }

  getUserRole(role: string) {
    switch (role) {
      case 'ADMIN':
        return 'Project Chef';
      case 'MANAGER':
        return 'Project Manager';
      case 'USER':
        return 'Employee';
      default:
        return 'Unknown';
    }
  }

  getRoleSeverity(role: string) {
    switch (role) {
      case 'ADMIN':
        return 'danger';
      case 'MANAGER':
        return 'warning';
      case 'USER':
        return 'success';
      default:
        return 'info';
    }
  }
}
