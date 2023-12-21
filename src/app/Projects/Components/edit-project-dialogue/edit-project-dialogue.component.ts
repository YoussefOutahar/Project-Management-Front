import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-project-dialogue',
  templateUrl: './edit-project-dialogue.component.html',
  styleUrls: ['./edit-project-dialogue.component.css'],
})
export class EditProjectDialogueComponent implements OnInit {
  projectFormGroup: FormGroup = new FormGroup({
    title: new FormControl(this.config.data.name, [Validators.required]),
    description: new FormControl(this.config.data.description, [
      Validators.required,
    ]),
    budget: new FormControl(this.config.data.budget, [Validators.required]),
    startDate: new FormControl(this.config.data.startDate, [
      Validators.required,
    ]),
    endDate: new FormControl(this.config.data.endDate, [Validators.required]),
  });

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    console.log(this.config.data);
  }

  ngOnInit() {}

  editProject() {
    this.ref.close(this.projectFormGroup.value);
  }
}
