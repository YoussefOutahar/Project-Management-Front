import { NgModule } from '@angular/core';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';

import { DockModule } from 'primeng/dock';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';

import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';

import { StyleClassModule } from 'primeng/styleclass';

@NgModule({
  declarations: [],
  exports: [
    // ===================
    ButtonModule,
    SplitButtonModule,
    SpeedDialModule,
    // ===================
    BreadcrumbModule,
    DockModule,
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    CardModule,
    AccordionModule,
    DividerModule,
    ToolbarModule,
    // ===================
    StyleClassModule,
  ],
})
export class PrimeNgModule {}
