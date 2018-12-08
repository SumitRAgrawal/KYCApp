import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
