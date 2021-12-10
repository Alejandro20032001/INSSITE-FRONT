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
    if(this.moduloName.replace(" ","") === ""){
      alert("Debes ingresar un nombre para el modulo");
    }else if(this.duracion < 7){
      alert("Un modulo debe durar al menos 7 dias");
    }else if(this.duracion > 30){
      alert("Un modulo no puede durar mas de 30 dias");
    }
    else{
      this.clickGuardar.emit(new Modulo(this.idModulo, this.moduloName, this.duracion, this.order, 0));
      this.moduloName = '';
      this.duracion = 0;
    }

  }
}
