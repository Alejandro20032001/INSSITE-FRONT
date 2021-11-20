import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Modulo } from '../models/modulo';

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

  /*<getAllModules():Observable<>{
    return this.http.get<>(this.base_url)
  }*/

  borrarModulo(nom: string): Observable<Modulo>{
    return this.http.delete<Modulo>(this.base_url + '/coursemodule/'+nom);
  }
}
