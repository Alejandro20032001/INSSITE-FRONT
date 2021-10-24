import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Teacher } from 'src/app/teacher/interfaces/teacher.interface'
import { Course } from 'src/app/courses/interfaces/course.interface';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  BASE_URL:string='http://localhost:3000'
  constructor(private http:HttpClient) { } 
  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>('$(this.BASE_URL)/course/:idUser');
  }

  getTeacher(id: number):Observable<Teacher>{
    return this.http.get<Teacher>('$(this.BASE_URL)/student/:idUser');
  }
  createTeacher(teacher:Teacher):Observable<Teacher>{
    return this.http.post<Teacher>('$(this.BASE_URL)/student/create', teacher);
  }
  deleteCourse(id:number):Observable<Course>{
    return this.http.delete<Course>('$(this.BASE_URL)/courses/delete?courseID=${id}');
  }
}