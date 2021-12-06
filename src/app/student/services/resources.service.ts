import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../interfaces/tarea.recibir.interface';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private apiURL = 'https://inssite-database.herokuapp.com/resource';

  constructor(private http: HttpClient) { }

  getResourceId(id:string):Observable<Tarea>{
   //return this.http.get<Course[]>('http://localhost:3000'+'/products');//pruebas
   return this.http.get<Tarea>(this.apiURL+"/"+id);
  }
}
