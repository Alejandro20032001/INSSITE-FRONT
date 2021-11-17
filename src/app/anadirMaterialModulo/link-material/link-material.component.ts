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
    score: 0
  }

  constructor(
    private router:Router,
    private cookieService: CookieService,
    private servicio: ModuleServices) { }

  ngOnInit(): void {
  }

  async guardar():Promise<void>{

    if(this.linkMaterial.link.length === 0){
      alert("La URL es obligatoria");
    }else if(this.linkMaterial.descripcion.length === 0){
      alert("La descripcion es obligatoria");
    }else{

      this.enviar.content = this.linkMaterial.link;
      this.enviar.descriptionResource = this.linkMaterial.descripcion;
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
