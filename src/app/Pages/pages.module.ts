import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { pageRoutes } from './pages.routing';

import { HomePageComponent } from './home-page/home-page.component';
import { TrelloComponent } from './Trello/trello.component';
import { OfficePageComponent } from './office-page/office-page.component';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { GanttPageComponent } from './gantt-page/gantt-page.component';
import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { ActivityNetworkPageComponent } from './activity-network-page/activity-network-page.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { RiskRegisterPageComponent } from './risk-register-page/risk-register-page.component';
import { RaciMatrixPageComponent } from './raci-matrix-page/raci-matrix-page.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../UI-Modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { PrimeNgModule } from '../UI-Modules/primeNg.module';

@NgModule({
  declarations: [
    HomePageComponent,
    TrelloComponent,
    OfficePageComponent,
    BudgetPageComponent,
    GanttPageComponent,
    ResourcesPageComponent,
    ActivityNetworkPageComponent,
    ReportsPageComponent,
    CalendarPageComponent,
    RiskRegisterPageComponent,
    RaciMatrixPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    NgApexchartsModule,
    PrimeNgModule,
    TablerIconsModule.pick(TablerIcons),
    RouterModule.forChild(pageRoutes),
  ],
  providers: [],
  exports: [],
})
export class PagesModule {}
