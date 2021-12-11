import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TareaPorCalificar } from '../interfaces/tarea.por.calificar.interface';


@Injectable({
  providedIn: 'root'
})
export class calificarTareasService {
    base_url:string = 'https://inssite-database.herokuapp.com/'

    constructor(private http:HttpClient) { }

    obtenerTareas(id:string):Observable<TareaPorCalificar[]>{
      let url = this.base_url + "course/homeworksToCheck/" + id;
      return this.http.get<TareaPorCalificar[]>(url);
    }

    calificarTarea(id:string, score:string):Observable<any>{
      let url = this.base_url + "homework/" + id + "/" + score;
      return this.http.put<any>(url,"");
    }

}
