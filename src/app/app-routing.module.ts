import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMainTeacherComponent } from './teacher/view-main-teacher/view-main-teacher.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { WelcomeViewStudentComponent } from './student/welcome-view-student/welcome-view-student.component';
import { CoursesViewStudentComponent } from './student/courses-view-student/courses-view-student.component';
import { UserGuardGuard } from './user-guard.guard';
import { VentanaPrincipalAnadirMaterialModuloComponent } from './anadirMaterialModulo/ventana-principal-anadir-material-modulo/ventana-principal-anadir-material-modulo.component';
import { LecturaComponent } from './anadirMaterialModulo/lectura/lectura.component';
import { LinkMaterialComponent } from './anadirMaterialModulo/link-material/link-material.component';
import { VideollamadaComponent } from './anadirMaterialModulo/videollamada/videollamada.component';
import { TareaComponent } from './anadirMaterialModulo/tarea/tarea.component';

const routes: Routes = [
  { path: 'teacher', component: ViewMainTeacherComponent, canActivate: [UserGuardGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent},
  { path: 'studentWelcomeView', component: WelcomeViewStudentComponent},
  { path: 'studentCourses', component: CoursesViewStudentComponent, canActivate: [UserGuardGuard]},
  { path: 'materialModulo',component: VentanaPrincipalAnadirMaterialModuloComponent},
  { path: 'nuevaLectura', component: LecturaComponent},
  { path: 'nuevoMaterial', component:LinkMaterialComponent},
  { path: 'nuevaVideollamada',component:VideollamadaComponent},
  { path: 'nuevaTarea', component: TareaComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
