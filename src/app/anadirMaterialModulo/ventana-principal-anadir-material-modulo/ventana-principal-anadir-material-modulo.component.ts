import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';
import { Lectura } from './entities/Lectura';
import { LinkMaterial } from './entities/LinkMaterial';
import { Material } from './entities/Material';
import { Tarea } from './entities/Tarea';
import { Videollamada } from './entities/Videollamada';
import { MaterialLista } from './interfaces/materialMenu.interface';
import { ModuleServices } from './services/module.service';

@Component({
  selector: 'app-ventana-principal-anadir-material-modulo',
  templateUrl: './ventana-principal-anadir-material-modulo.component.html',
  styleUrls: ['./ventana-principal-anadir-material-modulo.component.scss']
})
export class VentanaPrincipalAnadirMaterialModuloComponent implements OnInit {

  materiales:MaterialLista[] = [];
  nombreModulo!:string;

  constructor(
    private router:Router,
    private cookieService: CookieService,
    private servicios: ModuleServices) {
  }

  ngOnInit(): void {
    this.servicios.obtenerMaterialModulo(this.cookieService.get('idModulo')).
    pipe(
      tap((materiales:MaterialLista[]) => this.materiales = materiales.reverse())
    )
    .subscribe();
    this.nombreModulo = this.cookieService.get('nombreModulo');
  }

  nuevaLectura():void{
    this.router.navigate(["/nuevaLectura"]);
  }

  nuevoMaterial():void{
    this.router.navigate(["/nuevoMaterial"]);
  }

  nuevaTarea():void{
    this.router.navigate(["/nuevaTarea"]);
  }

  nuevaVideollamada():void{
    this.router.navigate(["/nuevaVideollamada"]);
  }

  guardar():void{
    if(this.materiales.length == 0){
      alert("No puedes guardar un modulo si no contiene ningun material");
    }else{
      this.router.navigate(["/modulosConfig"]);
    }
  }

  eliminar(id:string):void{
    this.servicios.eliminarMaterial(id).subscribe( (data) =>
    {
      console.log(data);
      this.ngOnInit();
    }
  );
  }
}
