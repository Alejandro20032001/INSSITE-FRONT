import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TareaHecha } from '../interfaces/tarea.hecha.interface';

@Injectable({
  providedIn: 'root',
})
export class GetHomeworksService {
  base_url: string = 'https://inssite-database.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getMyHomeworks():Observable<TareaHecha[]> {
      return this.http.get<TareaHecha[]>(this.base_url+'user/homeworks')
  }
}
