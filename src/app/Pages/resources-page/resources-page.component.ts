import { Component, OnInit } from '@angular/core';
import { HumanResources } from '../../Services/Resources/Interfaces';
import { ResourcesService } from '../../Services/Resources/resources.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddResourceDialgComponent } from './Components/add-resource-dialg/add-resource-dialg.component';
import { EditResourceDialgComponent } from './Components/edit-resource-dialg/edit-resource-dialg.component';

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.css'],
  providers: [DialogService],
})
export class ResourcesPageComponent implements OnInit {
  sortOrder!: number;

  layout: string = 'list';

  sortField!: string;

  resources!: HumanResources[];

  ref: DynamicDialogRef | undefined;

  constructor(
    private resourceService: ResourcesService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.resourceService.getActiveProjectResources().subscribe((data) => {
      this.resources = data;
    });
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  async handleAddNewResource() {
    this.ref = this.dialogService.open(AddResourceDialgComponent, {
      header: 'Add a resource',
      footer: 'YoraStd',
      width: '50vw',
      modal: true,
    });

    this.ref.onClose.subscribe((data: any) => {
      console.log(data);
    });
  }

  async handleEditResource(resource: HumanResources) {
    this.ref = this.dialogService.open(EditResourceDialgComponent, {
      header: 'Edit resource',
      footer: 'YoraStd',
      width: '50vw',
      modal: true,
    });

    this.ref.onClose.subscribe((data: any) => {
      console.log(data);
    });
  }
}
