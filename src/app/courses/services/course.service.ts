import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Course } from '../../student/interfaces/course.interface';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  BASE_URL:string='https://inssite-database.herokuapp.com'

  constructor(private http:HttpClient) { }

  getCourses():Observable<Course[]>{
    //return this.http.get<Course[]>('http://localhost:3000'+'/courses');//prueba
    return this.http.get<Course[]>('https://inssite-database.herokuapp.com/course');
  }

  getCourse(id: number):Observable<Course>{
    return this.http.get<Course>('$(this.BASE_URL)/courses/${id}');
  }
  createCourse(course:Course):Observable<Course>{
    return this.http.post<Course>('$(this.BASE_URL)/courses/create', course);
  }
  deleteCourse(id:number):Observable<Course>{
    return this.http.delete<Course>('$(this.BASE_URL)/courses/delete?courseID=${id}');
  }
  updateCourse(id:number ,course :Course):Observable<Course>{
    return this.http.put<Course>('$(this.BASE_URL)/courses/update?courseId=${id}',course);
  }
}
