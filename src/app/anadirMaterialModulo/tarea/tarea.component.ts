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
    //this.router.navigate(['materialModulo']);
    console.log(this.tarea.fecha);
    console.log(this.tarea.titulo);
    console.log(this.tarea.descripcion);
    console.log(this.tarea.puntuacion);
  }
}
