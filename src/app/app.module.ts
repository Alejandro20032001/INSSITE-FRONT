import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeViewStudentComponent } from './student/welcome-view-student/welcome-view-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { CoursesViewStudentComponent } from './student/courses-view-student/courses-view-student.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './registro/registro.component';
import { ViewMainTeacherComponent } from './teacher/view-main-teacher/view-main-teacher.component';
import { AngularMModule } from './angularM.material';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeViewStudentComponent,
    CoursesViewStudentComponent,
    RegistroComponent,
    ViewMainTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    AngularMModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
