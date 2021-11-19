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

  constructor(
    private router:Router,
    private cookieService: CookieService,
    private servicios: ModuleServices) {
  }

  ngOnInit(): void {
    this.cookieService.set('idModulo',"0be18942-b6a2-48cf-8cfc-2edf1b8e5d5a");
    this.servicios.obtenerMaterialModulo(this.cookieService.get('idModulo')).
    pipe(
      tap((materiales:MaterialLista[]) => this.materiales = materiales.reverse())
    )
    .subscribe();
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
    console.log(this.materiales[0].resourceType);
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
