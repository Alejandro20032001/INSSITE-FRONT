import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';
import { CourseService } from 'src/app/courses/services/course.service';
import { Student } from 'src/app/student/interfaces/student.interface';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { userSend } from 'src/app/registro/interfaces/userSend.interface';

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
  columnsTo =['Nombre','Estado'] ;
  columnsToDisplay = ['completeName', 'Estado'] ;
  expandedElement!: userSend | null;
  numTareas:number=3;
  constructor(private router : Router,
    private cookieService: CookieService,
    private servicios: CourseService) { }

  ngOnInit(): void {
    this.servicios.getStudents('ac16e052-d0cb-45c9-a7c5-c97ad093b298').pipe(
      tap((dataSource:userSend[]) => this.dataSource = dataSource.reverse())
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

}
