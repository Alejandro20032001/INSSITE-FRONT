import { Component, OnInit } from '@angular/core';
import { TareaHecha } from '../interfaces/tarea.hecha.interface';

@Component({
  selector: 'app-vista-estudiante-tarea',
  templateUrl: './vista-estudiante-tarea.component.html',
  styleUrls: ['./vista-estudiante-tarea.component.scss']
})
export class VistaEstudianteTareaComponent implements OnInit {

  tareas:TareaHecha[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
