import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { pageRoutes } from './pages.routing';

import { TrelloComponent } from './Trello/trello.component';
import { OfficePageComponent } from './office-page/office-page.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { GanttPageComponent } from './gantt-page/gantt-page.component';
import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../UI-Modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { PrimeNgModule } from '../UI-Modules/primeNg.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BoardComponent } from './Trello/Components/board/board.component';
import { ListComponent } from './Trello/Components/list/list.component';
import { TaskCommentsComponent } from './tasks-page/task-comments/task-comments.component';
import { UserInfoDialgComponent } from './resources-page/Components/user-info-dialg/user-info-dialg.component';
import { UserTasksDialgComponent } from './resources-page/Components/user-tasks-dialg/user-tasks-dialg.component';

@NgModule({
  declarations: [
    // =====================
    TrelloComponent,
    BoardComponent,
    ListComponent,

    OfficePageComponent,

    TasksPageComponent,
    TaskCommentsComponent,

    BudgetPageComponent,
    GanttPageComponent,

    // =====================
    ResourcesPageComponent,
    UserInfoDialgComponent,
    UserTasksDialgComponent,

    //
    ReportsPageComponent,
    CalendarPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    NgApexchartsModule,
    PrimeNgModule,
    FullCalendarModule,
    TablerIconsModule.pick(TablerIcons),
    RouterModule.forChild(pageRoutes),
  ],
  providers: [],
  exports: [],
})
export class PagesModule {}
