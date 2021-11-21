import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modulo } from '../models/modulo';
import { CreacionModulo } from '../models/creacion.modulo.interface';
import { RespuestaModulo } from '../models/respuesta.modulo.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base_url:string = 'https://inssite-database.herokuapp.com/'

  constructor(private http:HttpClient) { }

  Login(form:LoginI):Observable<ResponseI>{
    let url = this.base_url + "auth/login"
    return this.http.post<ResponseI>(url, form)
  }

  borrarModulo(nom: string): Observable<Modulo>{
    return this.http.delete<Modulo>(this.base_url + 'coursemodule/'+nom);
  }

  crearModulo(modulo: CreacionModulo): Observable<CreacionModulo>{
    return this.http.post<CreacionModulo>(this.base_url + 'coursemodule', modulo );
  }

  obtenerModulos(idCourse: string):Observable<RespuestaModulo[]>{
    return this.http.get<RespuestaModulo[]>(this.base_url + 'course/modules/'+ idCourse);
  }
}
