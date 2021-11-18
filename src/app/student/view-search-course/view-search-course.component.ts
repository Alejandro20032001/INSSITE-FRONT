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
    this.courseService.getCourses().subscribe(data => console.log(data));
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
          //if(courseAux.idCourse === course.idCourse){
          if(courseAux.courseName === course.courseName && courseAux.descriptionCourse===course.descriptionCourse){//prueba
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
    
    lateEnroll(course:Course):boolean{
      var res:boolean=false;
      let date: Date = new Date();
        console.log(course.dateStartEnroles);
       var xMonth=parseInt(course.dateStartEnroles.substring(5, 7));  
       var xYear=parseInt(course.dateStartEnroles.substring(0, 4));  
       var xDate=parseInt(course.dateStartEnroles.substring(8,10));
       console.log(xMonth+"  "+xYear+" "+xDate);
     if (xYear> date.getFullYear())  
       {  
         res= true;
       }  
       else  
       {  
         if (xYear == date.getFullYear())  
         {   
           if (xMonth> date.getMonth()+1)  
           {  
             res= true;
           }  
           else  
           {   
             if (xMonth == date.getMonth()+1)  
             {  
               if (xDate> date.getDate())  
              res= true;
              };  
             }; 
           };
         };
         return res;
    }
  }