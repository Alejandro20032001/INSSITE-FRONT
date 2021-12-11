import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LinkMaterial } from '../ventana-principal-anadir-material-modulo/entities/LinkMaterial';
import { ResourceEnum } from '../ventana-principal-anadir-material-modulo/entities/ResourceEnum';
import { enviarMaterial } from '../ventana-principal-anadir-material-modulo/interfaces/material.interface';
import { ModuleServices } from '../ventana-principal-anadir-material-modulo/services/module.service';

@Component({
  selector: 'app-link-material',
  templateUrl: './link-material.component.html',
  styleUrls: ['./link-material.component.scss']
})
export class LinkMaterialComponent implements OnInit {

  linkMaterial: LinkMaterial = {
    link:"",
    descripcion:""
  };

  enviar: enviarMaterial = {
    resourceType: ResourceEnum.LINK_MATERIAL,
    title: '',
    descriptionResource: '',
    content: '',
    module: '',
    date: new Date(),
    score: 0,
    orderResource: 0
  }

  constructor(
    private router:Router,
    private cookieService: CookieService,
    private servicio: ModuleServices) { }

  ngOnInit(): void {
  }

  async guardar():Promise<void>{

    let bandera = false;
    try {
      const url = new URL(this.linkMaterial.link);
    } catch (error) {
      console.log(error);
      bandera = true; // => TypeError, "Failed to construct URL: Invalid URL"
    }
    if(this.linkMaterial.link.length === 0){
      alert("La URL es obligatoria");

    }else if(bandera){
      alert("Debes ingresar una URL valida");
    }
    else if(this.linkMaterial.descripcion.length === 0){
      alert("La descripcion es obligatoria");
    }else{

      this.enviar.content = this.linkMaterial.link;
      this.enviar.descriptionResource = this.linkMaterial.descripcion;
      this.enviar.module = this.cookieService.get('idModulo');
      this.enviar.orderResource = parseInt(this.cookieService.get("orden"));

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
