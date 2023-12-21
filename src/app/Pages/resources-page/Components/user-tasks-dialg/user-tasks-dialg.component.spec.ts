/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserTasksDialgComponent } from './user-tasks-dialg.component';

describe('UserTasksDialgComponent', () => {
  let component: UserTasksDialgComponent;
  let fixture: ComponentFixture<UserTasksDialgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTasksDialgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTasksDialgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
