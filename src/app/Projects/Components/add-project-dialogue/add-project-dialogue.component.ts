import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-project-dialogue',
  templateUrl: './add-project-dialogue.component.html',
  styleUrls: ['./add-project-dialogue.component.css'],
})
export class AddProjectDialogueComponent implements OnInit, OnDestroy {
  projectFormGroup: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    budget: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
  });

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  saveProject() {
    this.ref.close(this.projectFormGroup.value);
  }
}
