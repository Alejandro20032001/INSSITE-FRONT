import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';
import { Modulo } from 'src/app/models/modulo';
import { RespuestaModulo } from 'src/app/models/respuesta.modulo.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-crear-modulo',
  templateUrl: './crear-modulo.component.html',
  styleUrls: ['./crear-modulo.component.scss']
})
export class CrearModuloComponent implements OnInit {

  idModulo : string = '';
  moduloName : string = "";
  duracion : number = 0;
  order: number = 0;

  listaModulos:RespuestaModulo[] = [];

  @Output() clickGuardar = new EventEmitter<Modulo>();

  constructor(private servicios:LoginService, private cookie: CookieService) { }

  ngOnInit(): void {
  }

  guardarModulo(){
    this.servicios.obtenerModulos(this.cookie.get("idCourse")).
    pipe(
        tap((modulos:RespuestaModulo[]) => {
          console.log(modulos);
          this.listaModulos = modulos;

          let esta = false;

          this.listaModulos.forEach(element => {
            if(element.nameModule.trim() === this.moduloName.trim()){
              esta = true;
            }
          });

          if(esta){
            alert("Ese nombre de modulo ya existe");
          }else if(this.moduloName.trim() === ""){
            alert("Debes ingresar un nombre para el modulo");
          }else if(this.duracion < 7){
            alert("Un modulo debe durar al menos 7 dias");
          }else if(this.duracion > 30){
            alert("Un modulo no puede durar mas de 30 dias");
          }
          else{
            this.clickGuardar.emit(new Modulo(this.idModulo, this.moduloName, this.duracion, this.order, 0));
            this.moduloName = '';
            this.duracion = 0;
          }
        })
    ).subscribe();



  }
}
