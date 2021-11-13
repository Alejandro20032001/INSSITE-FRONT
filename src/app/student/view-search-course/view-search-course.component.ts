import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/courses/services/course.service';
import { Course } from 'src/app/courses/interfaces/course.interface';
import {tap} from 'rxjs/operators';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-search-course',
  templateUrl: './view-search-course.component.html',
  styleUrls: ['./view-search-course.component.scss']
})
export class ViewSearchCourseComponent implements OnInit {
    constructor(private courseService: CourseService, private mycourses: CoursesService, private router:Router) { }
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
    //this.mycourses.getProducts().subscribe(data => console.log(data));
    }

     enroll(course:Course){
        var resultado = window.confirm('Confirma tu inscripcion');
        if (resultado === true) {
            this.mycourses.createCourse(course);
            window.alert('Tu inscripcion ha sido exitosa')
        } else { 
            window.alert('Inscripcion cancelada');
        }
     }
     enrollPrevious(course:Course): boolean {
       var res:boolean =false;
       for(let courseAux of this.mycourse ){
          if(courseAux.courseName === course.courseName && courseAux.descriptionCourse===course.descriptionCourse){
              res= true;
          }
       }
       console.log(course.courseName);
       return res;
     }
     logOut():void{
      this.router.navigate(['./login']);
    }
  
    goHome():void{
      this.router.navigate(['./studentWelcomeView']);
    }
  }