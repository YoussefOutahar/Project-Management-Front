import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-resource-dialg',
  templateUrl: './add-resource-dialg.component.html',
  styleUrls: ['./add-resource-dialg.component.css'],
})
export class AddResourceDialgComponent implements OnInit {
  resourceFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    costPerHour: new FormControl(0, [Validators.required]),
  });
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {}

  saveResource() {
    this.ref.close(this.resourceFormGroup.value);
  }
}
