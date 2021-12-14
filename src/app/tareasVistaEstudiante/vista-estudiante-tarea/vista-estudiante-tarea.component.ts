import { Component, OnInit } from '@angular/core';
import { GetHomeworksService} from '../services/homework.service'
@Component({
  selector: 'app-vista-estudiante-tarea',
  templateUrl: './vista-estudiante-tarea.component.html',
  styleUrls: ['./vista-estudiante-tarea.component.scss']
})
export class VistaEstudianteTareaComponent implements OnInit {

  constructor(homeworService:GetHomeworksService) { }

  ngOnInit(): void {
    
  }

}
