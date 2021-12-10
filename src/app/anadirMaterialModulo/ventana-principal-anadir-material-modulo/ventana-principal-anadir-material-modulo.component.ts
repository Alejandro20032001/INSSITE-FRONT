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

          this.materiales.push(new MaterialListaNombreCorreto(tipo, element.title, element.descriptionResource, element.content, element.module, element.date, element.score, element.idResource));
        });
      })
    )
    .subscribe();
    this.nombreModulo = this.cookieService.get('nombreModulo');
  }

  nuevaLectura():void{
    this.router.navigate(["/nuevaLectura"]);
  }

  nuevoMaterial():void{
    this.router.navigate(["/nuevoMaterial"]);
  }

  nuevaTarea():void{
    this.router.navigate(["/nuevaTarea"]);
  }

  nuevaVideollamada():void{
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
      console.log(data);
      this.ngOnInit();
    }
  );
  }
}
