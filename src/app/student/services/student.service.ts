import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from 'src/app/student/intefaces/student.interface';
import { Course } from 'src/app/courses/interfaces/course.interface';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  BASE_URL:string='http://localhost:3000'
  constructor(private http:HttpClient) { } 
  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>('$(this.BASE_URL)/course/:idUser');
  }

  getStudent(id: number):Observable<Student>{
    return this.http.get<Student>('$(this.BASE_URL)/student/:idUser');
  }
  createStudent(student:Student):Observable<Student>{
    return this.http.post<Student>('$(this.BASE_URL)/student/create', student);
  }
  deleteCourse(id:number):Observable<Course>{
    return this.http.delete<Course>('$(this.BASE_URL)/courses/delete?courseID=${id}');
  }
}