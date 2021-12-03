import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MaterialLista } from 'src/app/anadirMaterialModulo/ventana-principal-anadir-material-modulo/interfaces/materialMenu.interface';
import { ModuleServices } from 'src/app/anadirMaterialModulo/ventana-principal-anadir-material-modulo/services/module.service';
import {tap} from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { CoursesService } from 'src/app/student/services/courses.service';
import { Module } from 'src/app/models/modulo.inteface';
import { ResourceEnum } from 'src/app/anadirMaterialModulo/ventana-principal-anadir-material-modulo/entities/ResourceEnum';

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
  aleatorio!: String;
  link!:string;
  mostrar:boolean=false;


  Frases:string[]= ["Si en los inicios no puedes alimentar a tu equipo con 2 pizzas, es que es demasiado grande – Jeff Bezos de Amazon.",
  "El valor de una idea radica en el uso de la misma – Thomas Edison.",
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
    this.courseService.getModules().
    pipe(
      tap((listModule:Module[]) => this.listModule = listModule.sort( (a, b) => (a.orderModule > b.orderModule) ? 1 : -1))
    )
    .subscribe();
    this.cookieService.set('idModulo',"23fb49d0-c51b-4dc8-9a39-cb8ca66a295e");
    this.servicios.obtenerMaterialModulo(this.cookieService.get('idModulo')).
    pipe(
      tap((materiales:MaterialLista[]) => this.materiales = materiales.reverse())
    )
    .subscribe();
  }
   subirTareas(){}
   
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
   return 1*10;
  }
  randomF(): String{
   this.aleatorio = this.Frases[Math.floor(Math.random() * this.Frases.length)];
   return this.aleatorio;
  }
  
  llenarM(id:string){
   
  }
  
 mostrarF(){
   this.mostrar=!this.mostrar;
 }
 esTarea(mat:ResourceEnum):boolean{
     if(mat===ResourceEnum.HOMEWORK){
       return true;
     }
     return false;
 }
 volver(){

 }
}