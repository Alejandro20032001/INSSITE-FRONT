import { Component, OnInit } from '@angular/core';
import {Course} from '../interfaces/course.interface';
import {Router} from '@angular/router'
import { CookieService } from 'ngx-cookie-service';
import { CourseService } from '../services/course.service';
import { CreateCourse } from '../interfaces/create-course.interface';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  nuevoCurso: Course = {
    courseName:"",
    descriptionCourse:"",
    areaCourse: "",
    courseStartDate:new(Date),
    registrationStartDate: new(Date)
  }

  createCourse: CreateCourse = {
    courseName:"",
    descriptionCourse:"",
    areaCourse: "",
    dateStartEnrole: new(Date),
    dateStartCourse: new(Date)
  }
  constructor(private router:Router, private cookie :CookieService, private courseService:CourseService){}

  ngOnInit(): void {
  }


  goToTeacher():void{
    this.router.navigate(['/teacher']);

  }
  gotToAddModule():void{
    this.router.navigate(['/materialModulo']);
  }

  guardar():void{
    let fechaActual:Date;
    fechaActual = new Date();
    fechaActual = new Date(fechaActual.getFullYear() + "-" + (fechaActual.getMonth() + 1) + "-" + fechaActual.getDate());
    fechaActual.setHours( fechaActual.getHours() + 4);

    let fechaInscripcion = new Date(this.nuevoCurso.registrationStartDate);
    let fechaInicio = new Date(this.nuevoCurso.courseStartDate);

    fechaInscripcion.setHours( fechaInscripcion.getHours() + 4);
    fechaInicio.setHours(fechaInicio.getHours() + 4);

    console.log(fechaActual);
    console.log(fechaInscripcion);
    console.log(fechaInicio);

    if(this.nuevoCurso.courseName === ""){
      alert("El nombre es obligatorio");
    }else if(this.nuevoCurso.descriptionCourse.length < 100){
      alert("La descripcion debe tener al menos 100 caracteres, actualmente llevas " + (this.nuevoCurso.descriptionCourse.length));
    }else if(this.nuevoCurso.areaCourse === ""){
      alert("El area del curso es obligatoria");
    }else if(fechaInscripcion < fechaActual){
      alert("Las incripciones deben iniciar como minimo el dia de hoy, no puede escoger una fecha menor a esta.");
    }else{
      let diferenciaDias = fechaInicio.valueOf() - fechaInscripcion.valueOf();
      diferenciaDias = diferenciaDias / (1000 * 60 * 60 * 24);
      if(diferenciaDias < 7){
        alert("Debe existir al menos una semana de inscripcion");
      }else{
        let courseForm = this.nuevoCurso;
        
        this.createCourse.courseName = courseForm.courseName;
        this.createCourse.descriptionCourse = courseForm.descriptionCourse;
        this.createCourse.areaCourse = courseForm.areaCourse;
        this.createCourse.dateStartCourse = courseForm.courseStartDate;
        this.createCourse.dateStartEnrole = courseForm.registrationStartDate;
        
        this.courseService.createCourse(this.createCourse).subscribe((data) =>
          console.log(data)
        )
      }
    }
  }
}
