import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';
import { CourseService } from 'src/app/courses/services/course.service';
import { Student } from 'src/app/student/interfaces/student.interface';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProgresoComponent implements OnInit {
  dataSource!: Student[];
  columnsTo =['Nombre', 'Tarea', 'Fecha', 'estado'] ;
  columnsToDisplay = ['courseName', 'areaCourse', 'dateStartEnrole', 'estado'] ;
  expandedElement!: Student | null;
  constructor(private router : Router,
    private cookieService: CookieService,
    private servicios: CourseService) { }

  ngOnInit(): void {
    this.servicios.getStudents(this.cookieService.get('idModulo')).
    pipe(
      tap((dataSource:Student[]) => this.dataSource = dataSource.reverse())
    )
    .subscribe();
  }

  goAddCourse():void{
    this.router.navigate(['./newC']);
  }
  
  logout():void{
    this.router.navigate(['./login']);
  }
  goCourses(){
    this.router.navigate(['./teacher']);
  }
}
