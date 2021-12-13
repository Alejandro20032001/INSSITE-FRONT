import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Course } from '../../student/interfaces/course.interface';
import { Observable } from 'rxjs/internal/Observable';
import { CreateCourse } from '../interfaces/create-course.interface';
import { ResponseCourse } from '../interfaces/response-create-course';
import { materialAnswer } from 'src/app/anadirMaterialModulo/ventana-principal-anadir-material-modulo/interfaces/materialAnswer.interface';
import { courseAnswer } from '../interfaces/response.course';
import { Student } from 'src/app/student/interfaces/student.interface';
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
  getCourse(id: string):Observable<Course>{
    return this.http.get<Course>('$(this.BASE_URL)/course/${id}');
  }
  createCourse(course:CreateCourse):Observable<courseAnswer>{
    return this.http.post<courseAnswer>(this.BASE_URL + '/course', course);
  }

  getStudents(id: string):Observable<any[]>{
    return this.http.get<any[]>('https://inssite-database.herokuapp.com/course/students/'+id);
  }
}
