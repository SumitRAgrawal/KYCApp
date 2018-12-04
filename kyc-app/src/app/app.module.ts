import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SavingFormComponent } from './saving-form/saving-form.component';
import {PrimeModule} from './prime/prime.module';

@NgModule({
  declarations: [
    AppComponent,
    SavingFormComponent
  ],
  imports: [
    BrowserModule,
    PrimeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
