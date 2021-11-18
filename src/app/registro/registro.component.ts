import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './interfaces/user.interface';
import { userSend } from './interfaces/userSend.interface';
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
    roles: ['']
  };

  userSend: userSend = {
    completeName: '',
    username: '',
    password: '',
    roles:['']
  }

  //ESTUDIANTE , DOCENTE

  estudiante:boolean = false;

  constructor(private register: RegisterServices, private router:Router) { }

  ngOnInit(): void {
  }

  submitEstudiante():void{
    if (this.validar()) {
      this.user.roles[0] = 'ESTUDIANTE';
      this.userSend.completeName = this.user.name;
      this.userSend.username = this.user.userName;
      this.userSend.password = this.user.password;
      this.userSend.roles[0] = this.user.roles[0];
      this.register.registrar(this.userSend).subscribe(data => console.log(data));
      alert('Usuario registrado como estudiante');
      this.router.navigate(['./login']);
    }

  }

  submitDocente():void{
    if (this.validar()) {
      this.user.roles[0] = 'DOCENTE';
      this.userSend.completeName = this.user.name;
      this.userSend.username = this.user.userName;
      this.userSend.password = this.user.password;
      this.userSend.roles[0] = this.user.roles[0];
      this.register.registrar(this.userSend).subscribe(data => console.log(data));
      alert('Usuario registrado como docente');
      this.router.navigate(['./login']);
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

      alert('Password is not valid: La contraseña debe contener 8 caracteres como minimo, al menos una mayuscula, un numero y una miniscula, ademas de no contener espacios')
      return false;

    } else if (this.user.password !== this.user.password2) {

      alert('Ambas contraseñas deben ser iguales')
      return false;

    } else {

      return true;
    }
  }

  regresar():void{
    this.router.navigate(['./login']);
  }
}
