import { Component, Input, OnInit } from '@angular/core';
import { TareaHecha } from '../interfaces/tarea.hecha.interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  @Input() tareaHecha: TareaHecha = {
    idHomework: '',
    content: '',
    score: 0,
    resource: {
      idResource:'',
      resourceType:'',
      title:'',
      descriptionResource:'',
      score:-1
    },
    userDone:{
      idUser:'',
      completeName:'',
      username:''
    }
  };

  scoreOfTask: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
