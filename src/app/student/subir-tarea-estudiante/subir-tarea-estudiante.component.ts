import { Component, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea.recibir.interface';
import { EnviarTarea } from '../interfaces/envio.tarea.interface';
import { ResourceEnum } from "src/app/anadirMaterialModulo/ventana-principal-anadir-material-modulo/entities/ResourceEnum";
import { ResourcesService } from '../services/resources.service';
import { HomeworkService } from '../services/homework.service';


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
  enviarTarea: EnviarTarea = {
    content:"",
    resource : ""
  }
  constructor(
    private resourceService: ResourcesService,
    private homeworkService: HomeworkService
    ) { }

  ngOnInit(): void {
    let idTarea = "88c6ceda-ecb4-433f-a5d8-a2165dd687dd";// falta implementar
    this.resourceService.getResourceId(idTarea).subscribe((data) =>{
      this.tarea = data 
      console.log(data)
    }
    )
  }

  regresar():void{

  }

  enviar():void{
    this.enviarTarea.resource = "88c6ceda-ecb4-433f-a5d8-a2165dd687dd";
    this.homeworkService.postHomework(this.enviarTarea).subscribe((data) =>
      console.log()
    );
  }

}
