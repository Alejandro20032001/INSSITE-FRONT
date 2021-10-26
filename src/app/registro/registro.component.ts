import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  user: User = {
    name: '',
    userName: '',
    password: '',
    password2: '',
    userRoll: ''
  };

  //ESTUDIANTE , DOCENTE

  estudiante:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submitEstudiante():void{
    this.validar();
    console.log('estudiante');
  }

  submitDocente():void{
    this.validar();
    console.log('docente');
  }

  cambiarEstudiante():void{
    this.estudiante = true;
  }

  cambiarDocente():void{
    this.estudiante = false;
  }

  validar():boolean{
    return true;
  }
}
