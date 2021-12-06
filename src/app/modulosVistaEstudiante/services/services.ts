import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ModuleFromDataBase } from '../interfaces/ModuleFromDatabase';


@Injectable({
  providedIn: 'root'
})
export class ServicesObtenerModulos {
    base_url:string = 'https://inssite-database.herokuapp.com/'

    constructor(private http:HttpClient) { }

    obtenerMaterialModulo(id:string):Observable<ModuleFromDataBase[]>{
      let url = this.base_url + "course/modules/" + id;
      return this.http.get<ModuleFromDataBase[]>(url);
    }
}
