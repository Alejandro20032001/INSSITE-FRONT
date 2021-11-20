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
  @Output() clickGuardar = new EventEmitter<Modulo>();

  constructor() { }

  ngOnInit(): void {
  }

  guardarModulo(){
   
    this.clickGuardar.emit(new Modulo(this.idModulo, this.moduloName, this.duracion));
    this.moduloName = '';
    this.duracion = 0;
   
  }
}
