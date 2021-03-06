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
  tareas:MaterialLista[] = [];
  listModule:Module[] = [];
  selected !: Date;
  panelOpenState = false;
  campaignOne: FormGroup;
  campaignTwo: FormGroup;
  aleatorio!: String;
  link!:string;
  mostrar:boolean=false;
  fraseHoy!:string;


  Frases:string[]= [
  "El valor de una idea radica en el uso de la misma – Thomas Edison.",
  "Tus clientes más insatisfechos deben ser tu mayor fuente de aprendizaje – Bill Gates",
  "Una visión de una idea sin la capacidad de ejecución es únicamente una alucinación",
  "El único modo de hacer un gran trabajo es amar lo que haces - Steve Jobs",
  "El dinero no es la clave del éxito; la libertad para poder crear lo es - Nelson Mandela",
  "Cuanto más duramente trabajo, más suerte tengo - Gary Player",
  "El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu",
  "Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida",
  "Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro",
  "Cuéntamelo y me olvidaré, enséñamelo y lo recordaré, involúcrame y lo aprenderé",
  "La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar"];


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
    this.servicios.obtenerMaterialModulo(this.cookieService.get('idModulo')).
    pipe(
      tap((materiales:MaterialLista[]) => this.materiales = materiales.reverse())
    )
    .subscribe();

    this.servicios.obtenerTareasSinHacer(this.cookieService.get('idModulo')).
    pipe(
      tap((tareas:MaterialLista[]) => this.tareas = tareas.reverse())
    )
    .subscribe();
     this.fraseHoy =this.randomF();
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
  goTask(id:string){
    this.cookieService.set('idTarea',id);
    this.router.navigate(['./subirTarea']);
  }
  nivel(): number {
   return 1*10;
  }
  randomF(): string{
    let aux =this.Frases[Math.round(Math.random() * 10)];
    this.fraseHoy=aux;
    return this.fraseHoy
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
  this.router.navigate(['./modulosVistaEstudiante']);
 }
}
