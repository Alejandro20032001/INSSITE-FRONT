import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Tarea } from '../ventana-principal-anadir-material-modulo/entities/Tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {

  tarea: Tarea = {
    fecha:new Date(),
    puntuacion:1,
    descripcion:"",
    titulo:""
  };

  constructor(
    private router:Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  guardar():void{

    if(this.tarea.titulo.length === 0){
      alert("El titulo es obligatorio");
    }else if(this.tarea.puntuacion < 1 || this.tarea.puntuacion > 10){
      alert("La calificacion debe ser mayor que 0 y menor que 11");
    }else{
      this.router.navigate(['materialModulo']);
    }
  }
}
