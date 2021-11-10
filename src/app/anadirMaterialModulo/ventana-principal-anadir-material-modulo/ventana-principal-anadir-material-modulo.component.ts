import { Component, OnInit } from '@angular/core';
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

  constructor() { }

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


}
