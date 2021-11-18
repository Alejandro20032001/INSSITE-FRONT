import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeViewStudentComponent } from './student/welcome-view-student/welcome-view-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { CoursesViewStudentComponent } from './student/courses-view-student/courses-view-student.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistroComponent } from './registro/registro.component';
import { ViewMainTeacherComponent } from './teacher/view-main-teacher/view-main-teacher.component';
import { AngularMModule } from './angularM.material';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { HomeComponent } from './home/home.component'
import { HttpErrorInterceptor } from './services/interceptor.service';
import { NuevoComponent } from './courses/nuevo/nuevo.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeViewStudentComponent,
    CoursesViewStudentComponent,
    RegistroComponent,
    ViewMainTeacherComponent,
    LoginComponent,
    HomeComponent,
    //NuevoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,MatDatepickerModule,MatNativeDateModule,
    MaterialComponentsModule,
    AngularMModule,
    ReactiveFormsModule,
    HttpClientModule,
    //FormGroup
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,useClass: HttpErrorInterceptor, multi: true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
