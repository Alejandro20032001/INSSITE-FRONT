import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';
import { TareaPorCalificar } from '../interfaces/tarea.por.calificar.interface';
import { calificarTareasService } from '../services/calificartareas.service';

@Component({
  selector: 'app-vista-tareas-docente',
  templateUrl: './vista-tareas-docente.component.html',
  styleUrls: ['./vista-tareas-docente.component.scss']
})
export class VistaTareasDocenteComponent implements OnInit {

  constructor(private calificarTareaService:calificarTareasService, private router:Router, private cookieService: CookieService) { }

  idResource : string = "";
  nota : Number = 0;
  titulo : string = "";
  tareasPorCalificar:TareaPorCalificar[] = [];

  ngOnInit(): void {
    this.calificarTareaService.obtenerTareas(this.cookieService.get('idCurso')).
    pipe(
      tap((materiales:TareaPorCalificar[]) => {
        this.tareasPorCalificar = materiales;
      })
    )
    .subscribe();
  }

}
