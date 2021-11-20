import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {Course} from '../interfaces/course.interface';
import {Router} from '@angular/router'
import { CookieService } from 'ngx-cookie-service';
import { UpperCasePipe } from '@angular/common';
let palabra="como Estas1";
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {
  signupForm: FormGroup

  nuevoCurso: Course = {
    courseName:"",
    descriptionCourse:"",
    areaCourse: "",
    courseStartDate:new(Date),
    registrationStartDate: new(Date)
  }

  constructor(
    private router:Router,
    private _builder: FormBuilder,
    private cookie :CookieService
    )
    {
      this.signupForm = this._builder.group({
        nomM:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(30)])],
        descM:['',Validators.compose([Validators.required,Validators.minLength(50),Validators.maxLength(200)])],
        areaM:['',Validators.required],
        fII:[''],
        fIC:['']


      })
    }

  ngOnInit(): void {
    this.cookie.set('myCookie','cookie prueba');
    this.cookie.get('myCookie');
  }


  goToTeacher():void{
    this.router.navigate(['/teacher']);

  }gotToAddModule():void{
    this.router.navigate(['/materialModulo']);
    //console.log("el metodo ir a addModule a sido llamado");
  }
  convertirAMayuscula(ii:any):String{
     return ii.toUpperCase();
  }

  pal2="1234";

  guardarDatos(valDatos: any): void{
    console.log(valDatos);
    //console.log(this.convertirAMayuscula(palabra));
    this.nuevoCurso.courseName=this.signupForm.get('nomM')?.value;
    this.nuevoCurso.descriptionCourse=this.signupForm.get('descM')?.value;
    this.nuevoCurso.areaCourse=this.signupForm.get('areaM')?.value;
    this.nuevoCurso.courseStartDate=this.signupForm.get('fII')?.value;
    this.nuevoCurso.registrationStartDate=this.signupForm.get('fIC')?.value;
    console.log(this.nuevoCurso.courseName);
  }
  mostrar(): void{
    console.log("como estas");
    //console.log(this.getStringValue(document.getElementById("nombreM")?.nodeValue));
    //console.log(this.getStringValue(this.signupForm.get.length));
    console.log(this.convertirAMayuscula(palabra));
  }
  verificarDatos():void{
    if(this.validar()){
      this.nuevoCurso.courseName=this.nuevoCurso.courseName;
      console.log(this.nuevoCurso.courseName);
      alert('esto es una prueba');
    }
  }
  funcion():boolean{
    let r:boolean=false;
    console.log(this.nuevoCurso.courseStartDate>new(Date));
    console.log('este es una nueva funcion');
    return r;
  }
  validar():boolean{
    if(!this.nuevoCurso.courseName.match('^[a-zA-Z1-9 ]{3,30}$')){
      alert('El nombre debe contener entre 3 y 50 caracteres, y solo se permite el uso del espacio como caracter especial')
      return false;
    }else if (!this.nuevoCurso.descriptionCourse.match('^[a-zA-Z][a-zA-Z0-9]{4,}$')) {
      alert('la descripcion debe tener un minimo de 50 palabras y un maximo de 50 palabras')
      return false;
    } else if (!this.nuevoCurso.areaCourse.match('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,}$')) {
      alert('')
      return false;
    } else if (this.nuevoCurso.registrationStartDate > this.nuevoCurso.courseStartDate ){
      alert('la fecha de inscripcion debe ser menor a la fecha de inicio de curso')
      return false;
    } else if (this.nuevoCurso.courseStartDate < new(Date)) {
      alert('la fecha debe ser mayor a la fecha actual')
      return false;
    } else {
      return true;
    }

  }
  fechaMenor():boolean{

    return false;
  }

}
