import { Component, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea.recibir.interface';
import { ResourceEnum } from "src/app/anadirMaterialModulo/ventana-principal-anadir-material-modulo/entities/ResourceEnum";

@Component({
  selector: 'app-subir-tarea-estudiante',
  templateUrl: './subir-tarea-estudiante.component.html',
  styleUrls: ['./subir-tarea-estudiante.component.scss']
})
export class SubirTareaEstudianteComponent implements OnInit {

  tarea:Tarea = {
    resourceType: ResourceEnum.HOMEWORK,
    title: 'Este es el titulo de la tarea',
    descriptionResource: 'Lorem ipsum',
    content: '',
    module: '',
    date: new(Date),
    score: 5,
    idResource: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  regresar():void{

  }

  enviar():void{

  }

}
