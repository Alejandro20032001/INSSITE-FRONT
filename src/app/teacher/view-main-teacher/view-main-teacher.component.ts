import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {tap} from 'rxjs/operators';
import { Course } from 'src/app/student/interfaces/course.interface';
import { CourseService } from 'src/app/courses/services/course.service';

@Component({
  selector: 'app-view-main-teacher',
  templateUrl: './view-main-teacher.component.html',
  styleUrls: ['./view-main-teacher.component.scss']
})
export class ViewMainTeacherComponent implements OnInit {
  showFiller = false;

  centered = false;
  disabled = false;
  unbounded = false;
  goHome(){}
  goAddCourse():void{
    this.router.navigate(['./newC']);
  }


  courses!: Course[];
  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.courseService.getCourses().pipe(
      tap((courses: Course[])=> this.courses=courses)
    ).subscribe();

    this.courseService.getCourses()
    .pipe(
      tap()
      )
    .subscribe();
  }

  logout():void{
    this.router.navigate(['./login']);
  }
  shortDescription(course:Course): any{
    return course.descriptionCourse.substring(0,46);
 }
 goModule(){
    this.router.navigate(['./modulosConfig']);
 }
 progreso(){
  this.router.navigate(['./progreso']);
}

}
