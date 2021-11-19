import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import {tap} from 'rxjs/operators';
import { Course } from '../interfaces/course.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-view-student',
  templateUrl: './courses-view-student.component.html',
  styleUrls: ['./courses-view-student.component.scss']
})
export class CoursesViewStudentComponent implements OnInit {

  courses: Course[] = [];

  constructor(private productSvc: CoursesService, private router:Router) { }

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
}
