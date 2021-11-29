import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MaterialLista } from 'src/app/anadirMaterialModulo/ventana-principal-anadir-material-modulo/interfaces/materialMenu.interface';
import { ModuleServices } from 'src/app/anadirMaterialModulo/ventana-principal-anadir-material-modulo/services/module.service';
import {tap} from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { CoursesService } from 'src/app/student/services/courses.service';
import { Module } from 'src/app/models/modulo.inteface';
import { isCallChain } from 'typescript';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  materiales:MaterialLista[] = [];
  listModule:Module[] = [];
  selected !: Date;
  panelOpenState = false;
  campaignOne: FormGroup;
  campaignTwo: FormGroup;



  Frases:string[]= ["Si en los inicios no puedes alimentar a tu equipo con 2 pizzas, es que es demasiado grande – Jeff Bezos de Amazon.",
  "El valor de una idea radica en el uso de la misma – Thomas Edison.",
  "El trabajo va a ocupar gran parte de tu vida. La única forma de estar realmente satisfecho es hacer aquello que crees que es un buen trabajo, y la única forma de hacer un gran trabajo es amar aquello que haces – Steve Jobs de Apple.",
   "Tus clientes más insatisfechos deben ser tu mayor fuente de aprendizaje – Bill Gates",
  "Una visión de una idea sin la capacidad de ejecución es únicamente una alucinación – Steve Case de AOL."];


  constructor(
    private router:Router,
    private cookieService: CookieService,
    private servicios: ModuleServices, private courseService: CoursesService) {
      const today = new Date();
      const month = today.getMonth();
      const year = today.getFullYear();
  
      this.campaignOne = new FormGroup({
        start: new FormControl(new Date(year, month, 13)),
        end: new FormControl(new Date(year, month, 16)),
      });
      this.campaignTwo = new FormGroup({
        start: new FormControl(new Date(year, month, 15)),
        end: new FormControl(new Date(year, month, 19)),
      });
  }

  ngOnInit(): void {
    this.cookieService.set('idModulo',"1ff3ba00-e970-4ee1-abbc-b77411a479ac");
    this.servicios.obtenerMaterialModulo(this.cookieService.get('idModulo')).
    pipe(
      tap((materiales:MaterialLista[]) => this.materiales = materiales.reverse())
    )
    .subscribe();

    this.courseService.getModules().
    pipe(
      tap((listModule:Module[]) => this.listModule = listModule.reverse())
    )
    .subscribe();
    console.log(this.listModule);
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
  nivel(): number {
   return this.listModule.length
  }
}
