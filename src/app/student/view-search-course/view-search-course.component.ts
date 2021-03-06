import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/courses/services/course.service';
import { tap } from 'rxjs/operators';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';
import {Course} from 'src/app/student/interfaces/course.interface'

@Component({
  selector: 'app-view-search-course',
  templateUrl: './view-search-course.component.html',
  styleUrls: ['./view-search-course.component.scss']
})
export class ViewSearchCourseComponent implements OnInit {
  constructor(private courseService: CourseService, private mycourses: CoursesService, private router: Router) { }
  filterPost = '';
  limpio=false;
  courses!: Course[];
  mycourse!: Course[];

  ngOnInit() {
    this.courseService.getCourses().pipe(
      tap((courses: Course[]) => this.courses = courses)
    ).subscribe();

    this.mycourses.getProducts().pipe(
      tap((mycourse: Course[]) => this.mycourse = mycourse)
    ).subscribe();

    this.mycourses.getProducts().subscribe(data => console.log(data));
  }

  enroll(course: Course) {
    var resultado = window.confirm('Confirma tu inscripcion');
    if (resultado === true) {
      console.log(course);
      this.mycourses.createCourse(course);
      location.reload();
      window.alert('Tu inscripcion ha sido exitosa');
    } else {
      window.alert('Inscripcion cancelada');
    }
  }
  enrollPrevious(course: Course): boolean {
    var res: boolean = false;
    if (this.mycourse !== undefined) {
      for (let courseAux of this.mycourse) {
        if(courseAux.idCourse === course.idCourse){
        //if (courseAux.courseName === course.courseName && courseAux.descriptionCourse === course.descriptionCourse) {//prueba
          res = true;
        }
      };
    }
    //console.log(course.courseName);
    return res;
  }
  logOut(): void {
    this.router.navigate(['./login']);
  }

  miscursos(): void {
    this.router.navigate(['./studentCourses']);
  }

  goHome(): void {
    this.router.navigate(['./studentWelcomeView']);
  }

  lateEnroll(course: Course): boolean {
    var res: boolean = false;
    let date: Date = new Date();
    let dateEnrole: Date = new Date(course.dateStartEnrole);
    console.log(date.getDate());
    console.log(dateEnrole.getDate());
    if (dateEnrole.getFullYear() > date.getFullYear()) {
      res = true;
    }
    else {
      if (dateEnrole.getFullYear() == date.getFullYear()) {
        if (dateEnrole.getMonth() + 1 > date.getMonth() + 1) {
          res = true;
        }
        else {
          if (dateEnrole.getMonth()+1 == date.getMonth()+1) {
            if (dateEnrole.getDate()+1 > date.getDate() || dateEnrole.getDate()+1 === date.getDate())
              res = true;
          };
        };
      };
    };
    return res;
  }
  shortDescription(course:Course): any{
     return course.descriptionCourse.substring(0,30);
  }
}

