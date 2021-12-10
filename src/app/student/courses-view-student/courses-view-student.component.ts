import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import {tap} from 'rxjs/operators';
import { Course } from '../interfaces/course.interface';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-courses-view-student',
  templateUrl: './courses-view-student.component.html',
  styleUrls: ['./courses-view-student.component.scss']
})
export class CoursesViewStudentComponent implements OnInit {

  courses: Course[] = [];

  constructor(private productSvc: CoursesService, private router:Router, private cookieService: CookieService) { }

  ngOnInit(): void {

    this.productSvc.getProducts().
    pipe(
      tap((courses:Course[]) => this.courses = courses)
    )
    .subscribe();
  }

  logOut():void{
    this.router.navigate(['./login']);
  }

  goHome():void{
    this.router.navigate(['./studentWelcomeView']);
  }
  search():void{
    this.router.navigate(['./searchCourse']);
  }

  irCurso(id: string):void{
    this.router.navigate(['./modulosVistaEstudiante']);
    this.cookieService.set('idCurso',id);
  }
}
