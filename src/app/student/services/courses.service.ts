import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private apiURL = 'https://inssite-database.herokuapp.com/user/courses';

  constructor(private http: HttpClient) { }

  getProducts():Observable<Course[]>{
    return this.http.get<Course[]>(this.apiURL);
  }
}
