import { Component, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea.recibir.interface';
import { EnviarTarea } from '../interfaces/envio.tarea.interface';
import { ResourceEnum } from "src/app/anadirMaterialModulo/ventana-principal-anadir-material-modulo/entities/ResourceEnum";
import { ResourcesService } from '../services/resources.service';
import { HomeworkService } from '../services/homework.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subir-tarea-estudiante',
  templateUrl: './subir-tarea-estudiante.component.html',
  styleUrls: ['./subir-tarea-estudiante.component.scss']
})

export class SubirTareaEstudianteComponent implements OnInit {

  tarea:Tarea = {
    resourceType: ResourceEnum.HOMEWORK,
    title: '',
    descriptionResource: '',
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
    private homeworkService: HomeworkService,
    private cookieService: CookieService,
    private router:Router
    ) { }

  ngOnInit(): void {
    let idTarea = this.cookieService.get('idTarea');// falta implementar
    this.resourceService.getResourceId(idTarea).subscribe((data) =>{
      this.tarea = data
      console.log(data)
    }
    )
  }

  regresar():void{
    this.router.navigate(['./moduleContent']);
  }

  enviar():void{
    let idTarea = this.cookieService.get('idTarea');
    this.enviarTarea.resource = idTarea;
    this.homeworkService.postHomework(this.enviarTarea).subscribe((data) =>{
          this.router.navigate(['./moduleContent']);
        }
      );
  }

}
