import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';
import { Lectura } from './entities/Lectura';
import { LinkMaterial } from './entities/LinkMaterial';
import { Material } from './entities/Material';
import { ResourceEnum } from './entities/ResourceEnum';
import { Tarea } from './entities/Tarea';
import { Videollamada } from './entities/Videollamada';
import { MaterialListaNombreCorreto } from './interfaces/material.vistaModulos.interface';
import { MaterialLista } from './interfaces/materialMenu.interface';
import { ModuleServices } from './services/module.service';

@Component({
  selector: 'app-ventana-principal-anadir-material-modulo',
  templateUrl: './ventana-principal-anadir-material-modulo.component.html',
  styleUrls: ['./ventana-principal-anadir-material-modulo.component.scss']
})
export class VentanaPrincipalAnadirMaterialModuloComponent implements OnInit {

  materiales:MaterialListaNombreCorreto[] = [];

  orden:Number = 0;
  nombreModulo!:string;

  constructor(
    private router:Router,
    private cookieService: CookieService,
    private servicios: ModuleServices) {
  }

  ngOnInit(): void {
    this.servicios.obtenerMaterialModulo(this.cookieService.get('idModulo')).
    pipe(
      tap((materiales:MaterialLista[]) => {

        materiales.forEach(element => {
          let tipo = "";
          if(element.resourceType === ResourceEnum.DOCUMENTATION){
            tipo = "LECTURA";
          }
          if(element.resourceType === ResourceEnum.LINK_MATERIAL){
            tipo = "LINK A MATERIAL";
          }
          if(element.resourceType === ResourceEnum.LINK_MEET){
            tipo = "VIDEO LLAMADA";
          }
          if(element.resourceType === ResourceEnum.HOMEWORK){
            tipo = "TAREA";
          }

          if(element.orderResource > this.orden){
            this.orden = element.orderResource;
          }
          this.materiales.push(new MaterialListaNombreCorreto(tipo, element.title, element.descriptionResource, element.content, element.module, element.date, element.score, element.idResource, element.orderResource));
        }
        );

        this.ordenarLista(this.materiales);
        console.log(this.materiales);
      })
    )
    .subscribe();
    this.nombreModulo = this.cookieService.get('nombreModulo');
  }

  nuevaLectura():void{
    this.cookieService.set("orden", (parseInt(this.orden.toString()) + 1) + "");
    this.router.navigate(["/nuevaLectura"]);
  }

  nuevoMaterial():void{
    this.cookieService.set("orden", (parseInt(this.orden.toString()) + 1) + "");
    this.router.navigate(["/nuevoMaterial"]);
  }

  nuevaTarea():void{
    this.cookieService.set("orden", (parseInt(this.orden.toString()) + 1) + "");
    this.router.navigate(["/nuevaTarea"]);
  }

  nuevaVideollamada():void{
    this.cookieService.set("orden", (parseInt(this.orden.toString()) + 1) + "");
    this.router.navigate(["/nuevaVideollamada"]);
  }

  guardar():void{
    if(this.materiales.length == 0){
      alert("No puedes guardar un modulo si no contiene ningun material");
    }else{
      this.router.navigate(["/modulosConfig"]);
    }
  }

  eliminar(id:string):void{
    this.servicios.eliminarMaterial(id).subscribe( (data) =>
    {
      window.location.reload();
    }
  );
  }

  ordenarLista(lista:MaterialListaNombreCorreto[]):void{

    let k,i,aux;
    let n = lista.length;

    for (k = 1; k < n; k++) {
      for (i = 0; i < (n - k); i++) {
          if (lista[i].orderResource > lista[i + 1].orderResource) {
              aux = lista[i];
              lista[i] = lista[i + 1];
              lista[i + 1] = aux;
          }
      }
    }
  }
}
