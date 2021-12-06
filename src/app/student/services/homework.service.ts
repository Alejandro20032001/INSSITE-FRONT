import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnviarTarea } from '../interfaces/envio.tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  private apiURL = 'https://inssite-database.herokuapp.com/homework';

  constructor(private http: HttpClient) { }

  postHomework(homework:EnviarTarea){
    const res = this.http.post(this.apiURL, homework);
    console.log(res);
   return res;
  }
}
