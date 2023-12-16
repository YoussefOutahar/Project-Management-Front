import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-project-dialogue',
  templateUrl: './add-project-dialogue.component.html',
  styleUrls: ['./add-project-dialogue.component.css'],
  providers: [DialogService],
})
export class AddProjectDialogueComponent implements OnInit, OnDestroy {
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  show() {
    this.ref = this.dialogService.open(ProductListDemo, {
      header: 'Select a Product',
      width: '50vw',
      modal: true,
    });
  }
}
