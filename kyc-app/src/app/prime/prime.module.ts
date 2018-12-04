import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PanelModule,
    CardModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    FieldsetModule
  ],
  exports: [
    PanelModule,
    CardModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    FieldsetModule

  ]
})
export class PrimeModule { }
