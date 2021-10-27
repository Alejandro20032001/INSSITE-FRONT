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
    if(!this.user.name.match('^[a-zA-Z\\s]{3,50}$')){

      alert('El nombre debe contener entre 3 y 50 caracteres, y solo se permite el uso del espacio como caracter especial')

    }else if (!this.user.userName.match('^[a-zA-Z][a-zA-Z0-9]{4,}$')) {

      alert('El nombre de usuario debe tener minimo 5 caracteres, y no se permite el uso de caracteres especiales, ademas el nombre no debe empezar con un numero')

    } else if (!this.user.password.match('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,}$')) {

      alert('Password is not valid: La contraseña debe contener 8 caracteres como minimo, al menos una mayuscula y un numero, ademas de no contener espacios')

    } else if (this.user.password !== this.user.password2) {

      alert('Ambas contraseñas deben ser iguales')

    } else {

    }
    return true;
  }
}
