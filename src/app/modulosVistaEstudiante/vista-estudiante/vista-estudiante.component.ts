import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Modulo } from 'src/app/models/modulo';
import { RespuestaModulo } from 'src/app/models/respuesta.modulo.interface';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-vista-estudiante',
  templateUrl: './vista-estudiante.component.html',
  styleUrls: ['./vista-estudiante.component.scss']
})
export class VistaEstudianteComponent implements OnInit {

  listaModulos: Modulo[] = [];
  listaModulos2: RespuestaModulo[] = [];
  @Input() modulo : Modulo = new Modulo("","",0,0,0);

  modul: Modulo={idModulo: " ",nombre: '', duracion: 0, order: 0, diasPrevios: 0};

  constructor(private moduleService: LoginService, private router: Router, private cookieService: CookieService) {

  }
  
  /*constructor() { 
    this.listaModulos.push(new Modulo("", "Infor", 15, 2, 0));
    this.listaModulos.push(new Modulo("", "Mates", 15, 2, 0));
    this.listaModulos.push(new Modulo("", "Compu", 15, 2, 0));
    this.listaModulos.push(new Modulo("", "Intro", 15, 2, 0));
  }*/

  ngOnInit(): void {
  }

  obtenerModulos(id:string){

  }
}
