import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
   verTemas(){

   }
   subirTareas(){

   }
  
   
   logOut(): void {
    this.router.navigate(['./login']);
  }
  miscursos(): void {
    this.router.navigate(['./studentCourses']);
  }

  goHome(): void {
    this.router.navigate(['./studentWelcomeView']);
  }

  goTask(){
    
  }

}
