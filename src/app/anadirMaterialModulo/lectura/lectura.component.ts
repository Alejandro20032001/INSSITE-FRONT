import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/registro/interfaces/user.interface';
import { Lectura } from '../ventana-principal-anadir-material-modulo/entities/lectura';

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.scss']
})
export class LecturaComponent implements OnInit {

  lectura: Lectura = {
    titulo:"",
    contenido:""
  };

  constructor(
    private router:Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    console.log(this.cookieService.get('idModulo'));
  }

  guardar():void{
    if(this.lectura.titulo.length === 0){
      alert("El titulo es obligatorio");
    }else if(this.lectura.contenido.length === 0){
      alert("El contenido es obligatorio");
    }else{
      this.router.navigate(['materialModulo']);
    }
  }
}
