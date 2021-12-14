import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';
import { Modulo } from 'src/app/models/modulo';
import { RespuestaModulo } from 'src/app/models/respuesta.modulo.interface';
import { LoginService } from 'src/app/services/login.service';
import { ModuleFromDataBase } from '../interfaces/ModuleFromDatabase';
import { ServicesObtenerModulos } from '../services/services';


@Component({
  selector: 'app-vista-estudiante',
  templateUrl: './vista-estudiante.component.html',
  styleUrls: ['./vista-estudiante.component.scss']
})
export class VistaEstudianteComponent implements OnInit {

  listaModulos: Modulo[] = [];
  listaModulos2: RespuestaModulo[] = [];
  @Input() modulo : Modulo = new Modulo("","",0,0,0);

  modul: Modulo={idModulo: " ",nombre: '', duracion: 0, order: 0, diasPrevios: 0};

  //constructor(private moduleService: LoginService, private router: Router, private cookieService: CookieService) {

  //}

  constructor(private servicios: ServicesObtenerModulos,  private cookie: CookieService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.cookie.get("idCurso"));
    this.servicios.obtenerMaterialModulo(this.cookie.get("idCurso")).
    pipe(
        tap((modulos:ModuleFromDataBase[]) => {
          this.ordenarLista(modulos);
          let contador = 0;
          modulos.forEach(element => {
            this.listaModulos.push(new Modulo(element.idModule,element.nameModule, element.durationModule, element.orderModule, contador))
            contador = element.durationModule + contador;
          });
        })
    ).subscribe();
  }

  obtenerModulos(id:string){

  }

  irCalificaciones(){
    this.router.navigate(['./tareasEstudiante']);
  }

  ordenarLista(lista:ModuleFromDataBase[]):void{

    let k,i,aux;
    let n = lista.length;

    for (k = 1; k < n; k++) {
      for (i = 0; i < (n - k); i++) {
          if (lista[i].orderModule > lista[i + 1].orderModule) {
              aux = lista[i];
              lista[i] = lista[i + 1];
              lista[i + 1] = aux;
          }
      }
    }
  }

}
