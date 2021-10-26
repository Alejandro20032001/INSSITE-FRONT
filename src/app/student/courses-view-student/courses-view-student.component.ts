import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import {tap} from 'rxjs/operators';
import { Course } from '../interfaces/course.interface';

@Component({
  selector: 'app-courses-view-student',
  templateUrl: './courses-view-student.component.html',
  styleUrls: ['./courses-view-student.component.scss']
})
export class CoursesViewStudentComponent implements OnInit {

  courses: Course[] = [];

  constructor(private productSvc: CoursesService) { }

  ngOnInit(): void {

    this.productSvc.getProducts().
    pipe(
      tap((courses:Course[]) => this.courses = courses)
    )
    .subscribe();
  }

}
