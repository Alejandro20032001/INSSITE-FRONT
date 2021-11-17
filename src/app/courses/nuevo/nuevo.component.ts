import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {Course} from '../interfaces/course.interface';
import {Router} from '@angular/router'
let pal2: any;
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
    ) {
      this.signupForm = this._builder.group({
        nomM:['',Validators.required],
        descM:[''],
        areaM:['',Validators.required],
        fII:[''],
        fIC:['']


      })
    }

  ngOnInit(): void {
  }

  getStringValue(z: any): String {
    let res:String;
    res="noEsVacio";
    res=String(z);

    return res;
  }
  goToTeacher():void{
    this.router.navigate(['/teacher']);

  }
  convertirAMayuscula(ii:String):String{
     return String(ii);
  }

  pal2="1234";
  mostrarDatos(valDatos: any): void{
    console.log(valDatos)
  }
  mostrar(): void{
    console.log("como estas");
    //console.log(this.getStringValue(document.getElementById("nombreM")?.nodeValue));
    console.log(this.getStringValue(this.signupForm.get.length));
    console.log(this.convertirAMayuscula(palabra));
  }
  verificarDatos():void{
    if(this.validar()){
      this.nuevoCurso.courseName=this.nuevoCurso.courseName;
      console.log(this.nuevoCurso.courseName);
      alert('esto es una prueba');
    }
  }
  validar():boolean{
    if(!this.nuevoCurso.courseName.match('^[a-zA-Z1-9 ]{3,30}$')){
      alert('El nombre debe contener entre 3 y 50 caracteres, y solo se permite el uso del espacio como caracter especial')
      return false;
    }else if (!this.nuevoCurso.descriptionCourse.match('^[a-zA-Z][a-zA-Z0-9]{4,}$')) {
      alert('El nombre de usuario debe tener minimo 5 caracteres, y no se permite el uso de caracteres especiales, ademas el nombre no debe empezar con un numero')
      return false;
    } else if (!this.nuevoCurso.areaCourse.match('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,}$')) {
      alert('Password is not valid: La contraseña debe contener 8 caracteres como minimo, al menos una mayuscula y un numero, ademas de no contener espacios')
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

}
