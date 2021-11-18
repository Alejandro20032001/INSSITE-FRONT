import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Modulo } from 'src/app/models/modulo';


@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {

  listaModulos:Modulo[];

  constructor() {
    this.listaModulos = [];
    //this.listaModulos.push(new Modulo('Biologia', 12));
    //this.listaModulos.push(new Modulo('Marino', 10));
   }

  ngOnInit(): void {
  }

  guardarModulo(respuesta: Modulo){
    this.listaModulos.push(respuesta);
  }

  terminarCurso(){
    if(this.listaModulos.length == 0){
      alert("Debe existir al menos un curso");
    }else{
      alert("Curso creado con exito");
    }
  }



}
