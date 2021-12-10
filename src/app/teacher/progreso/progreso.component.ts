import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';
import { CourseService } from 'src/app/courses/services/course.service';
import { Student } from 'src/app/student/interfaces/student.interface';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { userSend } from 'src/app/registro/interfaces/userSend.interface';
import { RegisterServices } from 'src/app/registro/services/user.service';
import { Homework } from 'src/app/student/interfaces/homework.interface';

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
  dataSource!:userSend[];
  columnsTo =['Nombre Completo'] ;
  columnsToDisplay = ['completeName'] ;
  expandedElement!: userSend;
  tareas:any=[''];
  tareasHechas!:Homework[];
  mostrar=false;
  constructor(private router : Router,
    private cookieService: CookieService,
    private servicios: CourseService, private userservice: RegisterServices) { }

  ngOnInit(): void {
    let id = this.cookieService.get("idCurso");
    this.servicios.getStudents(id).pipe(
      tap((dataSource:userSend[]) => this.dataSource = dataSource.sort())
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

  studentU(idU:string){
    this.tareasHechas=[];
    let idC:string =this.cookieService.get('idCurso');
    this.userservice.getprogreso(idC,idU).pipe(
      tap((tareas:any) => this.tareas = tareas)
    )
    .subscribe();
    this.mostrar=false;

  }
  cantidad(id:string){
    this.studentU(id);
    this.tareasHechas=this.tareas.tareasHechas;
    this.mostrar=!this.mostrar;
  }
}
