import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user.interface';
import { RegisterServices } from './services/user.service';

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

  constructor(private register: RegisterServices) { }

  ngOnInit(): void {
  }

  submitEstudiante():void{
    if (this.validar()) {
      this.user.userRoll = 'ESTUDIANTE';
      console.log('hola');
      console.log(this.register.registrar(this.user));
    }

  }

  submitDocente():void{
    if (this.validar()) {
      this.user.userRoll = 'DOCENTE';
      console.log('hola');
      console.log(this.register.registrar(this.user));
    }
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

      return false;

    }else if (!this.user.userName.match('^[a-zA-Z][a-zA-Z0-9]{4,}$')) {

      alert('El nombre de usuario debe tener minimo 5 caracteres, y no se permite el uso de caracteres especiales, ademas el nombre no debe empezar con un numero')
      return false;

    } else if (!this.user.password.match('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,}$')) {

      alert('Password is not valid: La contraseña debe contener 8 caracteres como minimo, al menos una mayuscula y un numero, ademas de no contener espacios')
      return false;

    } else if (this.user.password !== this.user.password2) {

      alert('Ambas contraseñas deben ser iguales')
      return false;

    } else {

      return true;
    }
  }
}
