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
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  exports: [
    // ===================
    BreadcrumbModule,
    CalendarModule,
    ColorPickerModule,
    CardModule,
    AccordionModule,
    DividerModule,
    ToolbarModule,
    ChipsModule,
    // ===================
    StyleClassModule,

    // Panels
    ScrollPanelModule,
    PanelModule,

    // Buttons
    ButtonModule,
    SplitButtonModule,
    SpeedDialModule,

    // Dialogs
    DialogModule,
    DynamicDialogModule,

    // Inputs
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    InputNumberModule,
    CascadeSelectModule,
    CheckboxModule,
    AutoCompleteModule,
    DropdownModule,

    // Menus
    MenuModule,

    // Views
    DataViewModule,
    TreeTableModule,
    TableModule,

    // Decorations
    TagModule,
    RatingModule,
    ProgressSpinnerModule,
  ],
})
export class PrimeNgModule {}
