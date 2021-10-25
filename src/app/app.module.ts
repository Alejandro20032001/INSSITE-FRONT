import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMainTeacherComponent } from './teacher/view-main-teacher/view-main-teacher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularMModule } from './angularM.material';
@NgModule({
  declarations: [
    AppComponent,
    ViewMainTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
