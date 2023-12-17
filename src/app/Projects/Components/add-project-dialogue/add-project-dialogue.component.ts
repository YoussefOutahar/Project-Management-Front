import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project-dialogue',
  templateUrl: './add-project-dialogue.component.html',
  styleUrls: ['./add-project-dialogue.component.css'],
})
export class AddProjectDialogueComponent implements OnInit, OnDestroy {
  value: string | undefined;
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

  saveProject() {}
}
