import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Modulo } from 'src/app/models/modulo';

@Component({
  selector: 'app-crear-modulo',
  templateUrl: './crear-modulo.component.html',
  styleUrls: ['./crear-modulo.component.scss']
})
export class CrearModuloComponent implements OnInit {

  idModulo : string = ' ';
  moduloName : string = " ";
  duracion : number = 0;
  order: number = 0;
  @Output() clickGuardar = new EventEmitter<Modulo>();

  constructor() { }

  ngOnInit(): void {
  }

  guardarModulo(){
    console.log("Hola");
    if(this.moduloName.replace(" ","") === ""){
      alert("Debes ingresar un nombre para el modulo");
    }else{
      this.clickGuardar.emit(new Modulo(this.idModulo, this.moduloName, this.duracion, this.order, 0));
      this.moduloName = '';
      this.duracion = 0;
    }

  }
}
