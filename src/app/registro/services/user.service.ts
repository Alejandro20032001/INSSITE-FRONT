import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';
import { userAnswer } from '../interfaces/userAnswer.interface';
import { userSend } from '../interfaces/userSend.interface';


@Injectable({
  providedIn: 'root'
})
export class RegisterServices {
    base_url:string = 'https://inssite-database.herokuapp.com/'

    constructor(private http:HttpClient) { }

    registrar(form:userSend):Observable<userAnswer>{
      let url = this.base_url + "user"
      return this.http.post<userAnswer>(url, form)
    }
    getprogreso(idC:string,idU: string):Observable<any>{
      try{
      let res:Observable<any>=this.http.get<any>('https://inssite-database.herokuapp.com/user/processOf/'+idC+'?idStudent='+idU);
      return res;      
    }catch(err){
      console.log('llego');
      
      return new Observable<any>();
    }
    }
}
