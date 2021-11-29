import { Component, OnInit } from '@angular/core';
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

  constructor(private servicios:LoginService){

  }

  ngOnInit(): void {
    this.servicios.obtenerModulos("672d7d24-0194-4569-b354-75b4e94950c0").
    pipe(
        tap((modulos:RespuestaModulo[]) => {
          this.intermedioModulos = modulos;
          this.listaModulos = [];
          modulos.forEach(element => {
            this.listaModulos.push(new Modulo(element.idModule,element.nameModule, element.durationModule, element.orderModule))
          });
          this.ordenarLista(this.listaModulos);
        })
    ).subscribe();
  }

  guardarModulo(respuesta: Modulo):void{
    let orden = 0;
    if(this.listaModulos.length > 0){
      orden = this.listaModulos[this.listaModulos.length - 1].order;
    }

    let enviar = new CreacionModulo("672d7d24-0194-4569-b354-75b4e94950c0",respuesta.nombre, respuesta.duracion, orden);
    this.servicios.crearModulo(enviar).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

  terminarCurso():void{
    if(this.listaModulos.length == 1){
      alert("Curso creado con exito");
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
