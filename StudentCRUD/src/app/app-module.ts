import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Addstudent } from './addstudent/addstudent';
import { Getstudent } from './getstudent/getstudent';
import { Getstudentbyid } from './getstudentbyid/getstudentbyid';
import { Updatestudent } from './updatestudent/updatestudent';

@NgModule({
  declarations: [App, Addstudent, Getstudent, Getstudentbyid, Updatestudent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
