import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';
import { CourseService } from 'src/app/courses/services/course.service';
import { userSend } from 'src/app/registro/interfaces/userSend.interface';
import { RegisterServices } from 'src/app/registro/services/user.service';
import { Homework } from 'src/app/student/interfaces/homework.interface';



@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss'],
})
export class ProgresoComponent implements OnInit {
  dataSource!:userSend[];
  columns: string[] = ['Nombre Completo'];
  displayedColumns: string[] = ['completeName'];
  mostrar:boolean=false;


  tareas!:any;
  tareasHechas!:Homework[];
  constructor(private router : Router,
    private cookieService: CookieService,
    private servicios: CourseService, private userservice: RegisterServices) { }

  ngOnInit(): void {
    this.cookieService.set('idCourse','ac16e052-d0cb-45c9-a7c5-c97ad093b298');
    this.servicios.getStudents('ac16e052-d0cb-45c9-a7c5-c97ad093b298').pipe(
      tap((dataSource:userSend[]) => this.dataSource = dataSource.reverse())
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


  studentU(idStudent:string){
    let idC:string =this.cookieService.get('idCourse');
    this.student(idC,idStudent);
  }


  student(idC:string,idU:string){
    this.mostrar=false;
    this.userservice.getprogreso(idC,idU).pipe(
      tap((tareas:any) => this.tareas = tareas)
    )
    .subscribe();   
    if(this.tareas.length!=0){
      this.mostrar=true;
    }  
  }


  cantidad(t:Homework[]):number{
    this.tareasHechas=t;
      return t.length;
  }
}
