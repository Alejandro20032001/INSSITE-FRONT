import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/courses/services/course.service';
import { Course } from 'src/app/courses/interfaces/course.interface';
import {tap} from 'rxjs/operators';
@Component({
  selector: 'app-view-search-course',
  templateUrl: './view-search-course.component.html',
  styleUrls: ['./view-search-course.component.scss']
})
export class ViewSearchCourseComponent implements OnInit {
    constructor(private courseService: CourseService) { }
   filterPost = '';
    courses!: Course[];
    
    ngOnInit() {
      
    this.courseService.getCourses().pipe(
      tap((courses: Course[])=> this.courses=courses)
    ).subscribe();
    }
     enroll(){}
  }