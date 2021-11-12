import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Lectura } from './entities/lectura';
import { LinkMaterial } from './entities/LinkMaterial';
import { Material } from './entities/material';
import { Tarea } from './entities/Tarea';
import { Videollamada } from './entities/Videollamada';

@Component({
  selector: 'app-ventana-principal-anadir-material-modulo',
  templateUrl: './ventana-principal-anadir-material-modulo.component.html',
  styleUrls: ['./ventana-principal-anadir-material-modulo.component.scss']
})
export class VentanaPrincipalAnadirMaterialModuloComponent implements OnInit {

  materiales:Material[] = [];

  constructor(
    private router:Router,
    private cookieService: CookieService) {
  }

  ngOnInit(): void {

    let lectura = new Lectura("Algo","algo");
    let link = new LinkMaterial("algo","algo");
    let video = new Videollamada("algo",new Date(),"algo");
    let tarea = new Tarea(new Date(),1,"");
    this.materiales[0] = lectura;
    this.materiales[1] = link;
    this.materiales[2] = video;
    this.materiales[3] = tarea;
  }

  nuevaLectura():void{
    this.cookieService.set('idModulo',"ABCD");
    this.router.navigate(["/nuevaLectura"]);
  }

  nuevoMaterial():void{
    this.cookieService.set('idModulo',"ABCD");
    this.router.navigate(["/nuevoMaterial"]);
  }

  nuevaTarea():void{
    this.cookieService.set('idModulo',"ABCD");
    this.router.navigate(["/nuevaTarea"]);
  }

  nuevaVideollamada():void{
    this.cookieService.set('idModulo',"ABCD");
    this.router.navigate(["/nuevaVideollamada"]);
  }
}
