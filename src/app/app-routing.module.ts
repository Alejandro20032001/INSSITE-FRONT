import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMainTeacherComponent } from './teacher/view-main-teacher/view-main-teacher.component';

const routes: Routes = [
  {path:'teacher', component: ViewMainTeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
