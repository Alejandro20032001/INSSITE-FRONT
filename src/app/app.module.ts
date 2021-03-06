import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ModulosComponent } from './components/modulos/modulos.component'
import { ModulosHeaderComponent } from './components/modulos-header/modulos-header.component';
import { ModuloComponent } from './components/modulo/modulo.component';
import { CrearModuloComponent } from './components/crear-modulo/crear-modulo.component';
import { WelcomeViewStudentComponent } from './student/welcome-view-student/welcome-view-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { CoursesViewStudentComponent } from './student/courses-view-student/courses-view-student.component';
import { RegistroComponent } from './registro/registro.component';
import { ViewMainTeacherComponent } from './teacher/view-main-teacher/view-main-teacher.component';
import { AngularMModule } from './angularM.material';
import { HttpErrorInterceptor } from './services/interceptor.service';
import { NuevoComponent } from './courses/nuevo/nuevo.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptor } from './jwt-interceptor.interceptor';
import { VentanaPrincipalAnadirMaterialModuloComponent } from './anadirMaterialModulo/ventana-principal-anadir-material-modulo/ventana-principal-anadir-material-modulo.component';
import { LecturaComponent } from './anadirMaterialModulo/lectura/lectura.component';
import { LinkMaterialComponent } from './anadirMaterialModulo/link-material/link-material.component';
import { VideollamadaComponent } from './anadirMaterialModulo/videollamada/videollamada.component';
import { TareaComponent } from './anadirMaterialModulo/tarea/tarea.component';
import { CoursesModule } from './courses/courses.module';
import { FilterPipe } from './pipes/filter.pipe';
import { ViewSearchCourseComponent } from './student/view-search-course/view-search-course.component';
import { ProgresoComponent } from './teacher/progreso/progreso.component';
import { SubirTareaEstudianteComponent } from './student/subir-tarea-estudiante/subir-tarea-estudiante.component';
import { VistaEstudianteComponent } from './modulosVistaEstudiante/vista-estudiante/vista-estudiante.component';
import { ModulosVEHeaderComponent } from './modulosVistaEstudiante/modulos-veheader/modulos-veheader.component';
import { ModuloCardComponent } from './modulosVistaEstudiante/modulo-card/modulo-card.component';
import { HeaderTareasComponent } from './calificarTareas/header-tareas/header-tareas.component';
import { VistaTareasDocenteComponent } from './calificarTareas/vista-tareas-docente/vista-tareas-docente.component';
import { CuerpoTareaComponent } from './calificarTareas/cuerpo-tarea/cuerpo-tarea.component';
import { ContenidoComponent } from './module/contenido/contenido.component';
import { HeaderComponent } from './tareasVistaEstudiante/header/header.component';
import { TareasComponent } from './tareasVistaEstudiante/tareas/tareas.component';
import { VistaEstudianteTareaComponent } from './tareasVistaEstudiante/vista-estudiante-tarea/vista-estudiante-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeViewStudentComponent,
    CoursesViewStudentComponent,
    RegistroComponent,
    ViewMainTeacherComponent,
    LoginComponent,
    HomeComponent,
    ModulosComponent,
    ModulosHeaderComponent,
    ModuloComponent,
    CrearModuloComponent,
    VentanaPrincipalAnadirMaterialModuloComponent,
    LecturaComponent,
    LinkMaterialComponent,
    VideollamadaComponent,
    TareaComponent,
    ViewSearchCourseComponent,
    FilterPipe,
    ProgresoComponent,
    SubirTareaEstudianteComponent,
    VistaEstudianteComponent,
    ModulosVEHeaderComponent,
    ModuloCardComponent,
    HeaderTareasComponent,
    VistaTareasDocenteComponent,
    CuerpoTareaComponent,
    ContenidoComponent,
    HeaderComponent,
    TareasComponent,
    VistaEstudianteTareaComponent
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
