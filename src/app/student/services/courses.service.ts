import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

<<<<<<< HEAD
  private apiURL = 'https://inssite-database.herokuapp.com/user/courses';
=======
  private apiURL = 'http://localhost:3000';
>>>>>>> pantallaBusqueda

  constructor(private http: HttpClient) { }

  getProducts():Observable<Course[]>{
   return this.http.get<Course[]>(this.apiURL+'/products');//pruebas
   //return this.http.get<Course[]>(this.apiURL+'/user/courses');
  }
  createCourse(course:Course):Observable<Course>{
    return this.http.put<Course>(this.apiURL+'/products', course); //pruebas
   // return this.http.put<Course>(this.apiURL +'/'+ course.idCourse, course);
  }
}
