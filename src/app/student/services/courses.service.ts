import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course.interface';
import { CookieService } from 'ngx-cookie-service';
import { Module } from 'src/app/models/modulo.inteface';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private apiURL = 'https://inssite-database.herokuapp.com';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  listModulo:Module[] = [];
  
  ngOnInit(): void {
    this.cookieService.set('idCourse',"ac16e052-d0cb-45c9-a7c5-c97ad093b298");
  }

  

  getProducts():Observable<Course[]>{
   //return this.http.get<Course[]>('http://localhost:3000'+'/products');//pruebas
   return this.http.get<Course[]>(this.apiURL+'/user/courses');
  }

  getModules():Observable<Module[]>{
    //return this.http.get<Course[]>('http://localhost:3000'+'/products');//pruebas
    return this.http.get<Module[]>(this.apiURL+'/coursemodule/'+this.cookieService.get('idCourse'));
   }
  
  createCourse(course:Course){
  // return this.http.put<Course>('http://localhost:3000'+'/products', course); //pruebas
  // /*
   console.log("LLego service");
   let con = this.http.put<any>(this.apiURL + '/course/'+course.idCourse,{}).subscribe({
    error: error => {
        console.error('There was an error!', error);
    }
   });
   console.log(con);
   return con;
   //*/
  }
}
