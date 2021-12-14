import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TareaHecha } from '../interfaces/tarea.hecha.interface';

import { GetHomeworksService} from '../services/homework.service'
@Component({
  selector: 'app-vista-estudiante-tarea',
  templateUrl: './vista-estudiante-tarea.component.html',
  styleUrls: ['./vista-estudiante-tarea.component.scss']
})
export class VistaEstudianteTareaComponent implements OnInit {

  tareas:TareaHecha[] = [];

  constructor(private servicio:GetHomeworksService) { }

  ngOnInit(): void {
    this.servicio.getMyHomeworks().
    pipe(
      tap((materiales:TareaHecha[]) => {
        this.tareas = materiales;
      })
    )
    .subscribe();
  }

}
