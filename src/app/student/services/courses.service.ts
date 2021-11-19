import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private apiURL = 'https://inssite-database.herokuapp.com';

  constructor(private http: HttpClient) { }

  getProducts():Observable<Course[]>{
   //return this.http.get<Course[]>(this.apiURL+'/products');//pruebas
   return this.http.get<Course[]>(this.apiURL+'/user/courses');
  }
  createCourse(course:Course){
   // return this.http.put<Course>(this.apiURL+'/products', course); //pruebas
   
   console.log("LLego service");
   let con = this.http.put<any>('https://inssite-database.herokuapp.com/course/672d7d24-0194-4569-b354-75b4e94950c0',{}).subscribe({
    error: error => {
        console.error('There was an error!', error);
    }
});
   console.log(con);
   return con;
   //return this.http.put("inssite-database/course/id",course);
  }
}
