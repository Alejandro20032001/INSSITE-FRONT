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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'
import { HttpErrorInterceptor } from './services/interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptor } from './jwt-interceptor.interceptor';
import { VentanaPrincipalAnadirMaterialModuloComponent } from './anadirMaterialModulo/ventana-principal-anadir-material-modulo/ventana-principal-anadir-material-modulo.component';
import { LecturaComponent } from './anadirMaterialModulo/lectura/lectura.component';
import { LinkMaterialComponent } from './anadirMaterialModulo/link-material/link-material.component';
import { VideollamadaComponent } from './anadirMaterialModulo/videollamada/videollamada.component';
import { TareaComponent } from './anadirMaterialModulo/tarea/tarea.component';
import { CoursesModule } from './courses/courses.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import { FilterPipe } from './pipes/filter.pipe';
import { ViewSearchCourseComponent } from './student/view-search-course/view-search-course.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeViewStudentComponent,
    CoursesViewStudentComponent,
    RegistroComponent,
    ViewMainTeacherComponent,
    LoginComponent,
    HomeComponent,
    VentanaPrincipalAnadirMaterialModuloComponent,
    LecturaComponent,
    LinkMaterialComponent,
    VideollamadaComponent,
    TareaComponent,
    ViewSearchCourseComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,MatDatepickerModule,MatNativeDateModule,
    MaterialComponentsModule,
    AngularMModule,
    ReactiveFormsModule,
    CoursesModule,
    HttpClientModule,

  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS,useClass: HttpErrorInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor , multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
