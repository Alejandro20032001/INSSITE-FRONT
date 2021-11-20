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
  tamanioLista : number = 0;
  router: any;

 
  

  constructor() {
    this.listaModulos = [];
    //this.listaModulos.push(new Modulo("",'Biologia', 12));
    //this.listaModulos.push(new Modulo('Marino', 10));
   }

  ngOnInit(): void {
  }

  guardarModulo(respuesta: Modulo){
    
    this.listaModulos.push(respuesta);
    console.log(this.listaModulos.length);
    
  }

  terminarCurso(){
    if(this.listaModulos.length == 1){
      alert("Curso creado con exito");
    }else{
      alert("Debe existir al menos un curso")
    }
  }

  
  



}
