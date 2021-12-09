import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';
import { CourseService } from 'src/app/courses/services/course.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { userSend } from 'src/app/registro/interfaces/userSend.interface';
import { RegisterServices } from 'src/app/registro/services/user.service';
import { MaterialLista } from 'src/app/anadirMaterialModulo/ventana-principal-anadir-material-modulo/interfaces/materialMenu.interface';
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
  displayedColumns=['No','Tarea','Puntuacion']
  expandedElement!: userSend | null;
  numTareas:number=3;
  tareas!:any;
  tareasHechas!:Homework[];
  constructor(private router : Router,
    private cookieService: CookieService,
    private servicios: CourseService, private userservice: RegisterServices) { }

  ngOnInit(): void {
    this.cookieService.set('idCourse','ac16e052-d0cb-45c9-a7c5-c97ad093b298');
    this.servicios.getStudents('ac16e052-d0cb-45c9-a7c5-c97ad093b298').pipe(
      tap((dataSource:userSend[]) => this.dataSource = dataSource.sort())
    )
    .subscribe();
    console.group();
    console.log(this.dataSource);
    console.groupEnd();
  }//this.cookieService.get('idModulo')).
  

  goAddCourse():void{
    this.router.navigate(['./newC']);
  }
  
  logout():void{
    this.router.navigate(['./login']);
  }
  goCourses(){
    this.router.navigate(['./teacher']);
  }
  studentU(idStudent:string){
    let idC:string =this.cookieService.get('idCourse');
    this.student(idC,idStudent);
  }
  student(idC:string,idU:string){
    this.userservice.getprogreso(idC,idU).pipe(
      tap((tareas:any) => this.tareas = tareas)
    )
    .subscribe();   

    console.log('llega');
  }
  cantidad(t:Homework[]):number{
    this.tareasHechas=t;
      return t.length;
  }

}
