import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CreacionModulo } from 'src/app/models/creacion.modulo.interface';
import { Modulo } from 'src/app/models/modulo';
import { RespuestaModulo } from 'src/app/models/respuesta.modulo.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {

  listaModulos: Modulo[] = [];
  intermedioModulos!:RespuestaModulo[];

  constructor(private router:Router, private servicios:LoginService, private cookie: CookieService){

  }

  ngOnInit(): void {
    this.servicios.obtenerModulos(this.cookie.get("idCourse")).
    pipe(
        tap((modulos:RespuestaModulo[]) => {
          this.intermedioModulos = modulos;
          this.listaModulos = [];
          let contador = 0;
          modulos.forEach(element => {
            this.listaModulos.push(new Modulo(element.idModule,element.nameModule, element.durationModule, element.orderModule, contador))
            contador = element.durationModule + contador;
          });
          this.ordenarLista(this.listaModulos);
        })
    ).subscribe();
  }

  guardarModulo(respuesta: Modulo):void{
    let orden = 0;
    if(this.listaModulos.length > 0){
      orden = this.listaModulos[this.listaModulos.length - 1].order + 1;
    }

    let enviar = new CreacionModulo(this.cookie.get("idCourse"),respuesta.nombre, respuesta.duracion, orden);
    this.servicios.crearModulo(enviar).subscribe(data => {
      this.ngOnInit();
    });
  }

  terminarCurso(){
    if(this.listaModulos.length > 0){
      alert("Curso creado con exito");
      this.router.navigate(['/teacher']);
    }else{
      alert("Debe existir al menos un curso")
    }
  }

  ordenarLista(lista:Modulo[]):void{

    let k,i,aux;
    let n = lista.length;

    for (k = 1; k < n; k++) {
      for (i = 0; i < (n - k); i++) {
          if (lista[i].order > lista[i + 1].order) {
              aux = lista[i];
              lista[i] = lista[i + 1];
              lista[i + 1] = aux;
          }
      }
    }
  }
}
