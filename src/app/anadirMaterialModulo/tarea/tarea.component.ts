import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ResourceEnum } from '../ventana-principal-anadir-material-modulo/entities/ResourceEnum';
import { Tarea } from '../ventana-principal-anadir-material-modulo/entities/Tarea';
import { enviarMaterial } from '../ventana-principal-anadir-material-modulo/interfaces/material.interface';
import { ModuleServices } from '../ventana-principal-anadir-material-modulo/services/module.service';

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

  enviar: enviarMaterial = {
    resourceType: ResourceEnum.HOMEWORK,
    title: '',
    descriptionResource: '',
    content: '',
    module: '',
    date: new Date(),
    score: 0
  }

  constructor(
    private router:Router,
    private cookieService: CookieService,
    private servicio: ModuleServices) { }

  ngOnInit(): void {
  }

  async guardar():Promise<void>{

    if(this.tarea.titulo.length === 0){
      alert("El titulo es obligatorio");
    }else if(this.tarea.puntuacion < 1 || this.tarea.puntuacion > 10){
      alert("La calificacion debe ser mayor que 0 y menor que 11");
    }else{
      this.enviar.title = this.tarea.titulo;
      this.enviar.descriptionResource = this.tarea.descripcion;
      this.enviar.score = this.tarea.puntuacion;
      this.enviar.module = this.cookieService.get('idModulo');

      let fecha = new Date(this.cookieService.get("inicioModulo"));
      fecha.setHours(24 * parseInt(this.cookieService.get("duracionModulo")));
      this.enviar.date = fecha;

      (await this.servicio.registrar(this.enviar)).subscribe( (data) =>
        {
          if(data.message === "created"){
            this.router.navigate(['materialModulo']);
          }
        }
      );
    }
  }
}
