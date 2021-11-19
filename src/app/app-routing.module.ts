import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMainTeacherComponent } from './teacher/view-main-teacher/view-main-teacher.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { WelcomeViewStudentComponent } from './student/welcome-view-student/welcome-view-student.component';
import { CoursesViewStudentComponent } from './student/courses-view-student/courses-view-student.component';
import { CoursesModule } from './courses/courses.module';
import { NuevoComponent } from './courses/nuevo/nuevo.component';

const routes: Routes = [
  { path: 'teacher', component: ViewMainTeacherComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent},
  { path: 'studentWelcomeView', component: WelcomeViewStudentComponent},
  { path: 'studentCourses', component: CoursesViewStudentComponent},
  { path: 'newC',component: NuevoComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
