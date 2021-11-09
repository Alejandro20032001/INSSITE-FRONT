import { Component, OnInit } from '@angular/core';
import { Material } from './entities/material';

@Component({
  selector: 'app-ventana-principal-anadir-material-modulo',
  templateUrl: './ventana-principal-anadir-material-modulo.component.html',
  styleUrls: ['./ventana-principal-anadir-material-modulo.component.scss']
})
export class VentanaPrincipalAnadirMaterialModuloComponent implements OnInit {

  materiales:Material[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
