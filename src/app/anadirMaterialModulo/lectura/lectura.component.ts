import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/registro/interfaces/user.interface';
import { Lectura } from '../ventana-principal-anadir-material-modulo/entities/lectura';
import { enviarMaterial } from '../ventana-principal-anadir-material-modulo/interfaces/material.interface';
import { ResourceEnum } from "../../anadirMaterialModulo/ventana-principal-anadir-material-modulo/entities/ResourceEnum";
import { ModuleServices } from '../ventana-principal-anadir-material-modulo/services/module.service';

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.scss']
})
export class LecturaComponent implements OnInit {

  lectura: Lectura = {
    titulo:"",
    contenido:""
  };

  enviar: enviarMaterial = {
    resourceType: ResourceEnum.DOCUMENTATION,
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
    private servicio: ModuleServices) {
    }

  ngOnInit(): void {
    console.log(this.cookieService.get('idModulo'));
  }

  async guardar():Promise<void>{
    if(this.lectura.titulo.length === 0){
      alert("El titulo es obligatorio");
    }else if(this.lectura.contenido.length === 0){
      alert("El contenido es obligatorio");
    }else{
      this.enviar.title = this.lectura.titulo;
      this.enviar.content = this.lectura.contenido;
      this.enviar.module = this.cookieService.get('idModulo');

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
