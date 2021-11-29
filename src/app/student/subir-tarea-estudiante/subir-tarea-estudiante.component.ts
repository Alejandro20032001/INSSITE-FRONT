import { Component, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea.recibir.interface';
import { ResourceEnum } from "src/app/anadirMaterialModulo/ventana-principal-anadir-material-modulo/entities/ResourceEnum";
import { ResourcesService } from '../services/resources.service';

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

  constructor(private resourceService: ResourcesService) { }

  ngOnInit(): void {
    let idTarea = "b68e82e3-d726-4505-966b-e778bb730265";// falta implementar
    this.resourceService.getResourceId(idTarea).subscribe((data) =>
      this.tarea = data  
    )
  }

  regresar():void{

  }

  enviar():void{

  }

}
