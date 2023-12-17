import { NgModule } from '@angular/core';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';

import { BreadcrumbModule } from 'primeng/breadcrumb';

import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';

import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';

import { StyleClassModule } from 'primeng/styleclass';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';

import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
@NgModule({
  declarations: [],
  exports: [
    // ===================
    ButtonModule,
    SplitButtonModule,
    SpeedDialModule,
    // ===================
    BreadcrumbModule,
    CalendarModule,
    ColorPickerModule,
    CardModule,
    AccordionModule,
    DividerModule,
    ToolbarModule,
    // ===================
    StyleClassModule,

    ScrollPanelModule,
    PanelModule,

    // Dialogs
    DynamicDialogModule,

    // Inputs
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    InputNumberModule,
    CascadeSelectModule,
    CheckboxModule,
    AutoCompleteModule,

    // Menus
    MenuModule,
  ],
})
export class PrimeNgModule {}
