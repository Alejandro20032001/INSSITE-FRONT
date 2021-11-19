import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { enviarMaterial} from '../interfaces/material.interface';
import { materialAnswer } from '../interfaces/materialAnswer.interface';
import { MaterialLista } from '../interfaces/materialMenu.interface';


@Injectable({
  providedIn: 'root'
})
export class ModuleServices {
    base_url:string = 'https://inssite-database.herokuapp.com/'

    constructor(private http:HttpClient) { }

    async registrar(form:enviarMaterial):Promise<Observable<materialAnswer>>{
      let url = this.base_url + "resource";
      return await this.http.post<materialAnswer>(url, form);
    }

    obtenerMaterialModulo(id:string):Observable<MaterialLista[]>{
      let url = this.base_url + "coursemodule/resources/" + id;
      return this.http.get<MaterialLista[]>(url);
    }

    eliminarMaterial(idResource:string):Observable<materialAnswer>{
      let url = this.base_url + "resource/" + idResource
      return this.http.delete<materialAnswer>(url);
    }
}
