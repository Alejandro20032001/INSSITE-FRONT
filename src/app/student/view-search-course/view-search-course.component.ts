import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/courses/services/course.service';
import { Course } from 'src/app/courses/interfaces/course.interface';
import {tap} from 'rxjs/operators';
import { CoursesService } from '../services/courses.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-view-search-course',
  templateUrl: './view-search-course.component.html',
  styleUrls: ['./view-search-course.component.scss']
})
export class ViewSearchCourseComponent implements OnInit {
    constructor(private courseService: CourseService,private mycourses: CoursesService) { }
    filterPost = '';
    courses!: Course[];
    mycourse!: Course[];
    
    ngOnInit() {
    this.courseService.getCourses().pipe(
      tap((courses: Course[])=> this.courses=courses)
    ).subscribe();
    this.mycourses.getProducts().
    pipe(
      tap((mycourse:Course[]) => this.mycourse = mycourse)
    )
    .subscribe();
    this.mycourses.getProducts().subscribe(data => console.log(data));
    }

     enroll(course:Course){
       if(this.enrollPrevious(course)){
         alert("You have previously registered for the course");
       }else{
        var resultado = window.confirm('Do you sure?');
        if (resultado === true) {
            this.mycourses.createCourse(course);
            window.alert('You have registed for this course')
        } else { 
            window.alert('Unsuccessful registration');
        }
       }
     }
     enrollPrevious(course:Course): boolean {
       var res:boolean =false;
       for( var courseAux of this.mycourse ){
          if(courseAux==course){
              res= true;
          }
       }
       return res;
     }
  }