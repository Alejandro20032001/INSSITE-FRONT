import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TareaPorCalificar } from '../interfaces/tarea.por.calificar.interface';
import { calificarTareasService } from '../services/calificartareas.service';

@Component({
  selector: 'app-cuerpo-tarea',
  templateUrl: './cuerpo-tarea.component.html',
  styleUrls: ['./cuerpo-tarea.component.scss'],
})
export class CuerpoTareaComponent implements OnInit {
  @Input() tareaPorCalificar: TareaPorCalificar = {
    content: '', idHomework : "",
    userDone: {
      completeName: 'J',
      idUser: '',
      username: '', 
    },
    resource: { score: 0, title: '' },
  };

  scoreOfTask : number = 0;

  constructor(private calificarTareasService: calificarTareasService, private cookieService: CookieService) {
    this.scoreOfTask = this.tareaPorCalificar.resource.score;
    
  }

  ngOnInit(): void {}

  clickCalificarTarea(): void {
    let idHomework : string = this.tareaPorCalificar.idHomework;
    console.log("this.scoreOfTask", this.scoreOfTask);
    console.log("idHomework", idHomework);
    this.calificarTareasService.calificarTarea(idHomework, this.scoreOfTask + '').subscribe(data=>
    {console.log(data);
    alert("Calificado con exito")},
    error=>{
      alert("Error inesperado")
    })
    
  }
}
