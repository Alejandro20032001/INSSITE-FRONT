import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Videollamada } from '../ventana-principal-anadir-material-modulo/entities/Videollamada';

@Component({
  selector: 'app-videollamada',
  templateUrl: './videollamada.component.html',
  styleUrls: ['./videollamada.component.scss']
})
export class VideollamadaComponent implements OnInit {

  videollamada: Videollamada = {
    link:"",
    fecha: new Date(),
    hora:"",
    descripcion:""
  };

  constructor(
    private router:Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  guardar():void{
    //this.router.navigate(['materialModulo']);
    console.log(this.videollamada.link);
    console.log(this.videollamada.fecha);
    console.log(this.videollamada.hora);
    console.log(this.videollamada.descripcion);
  }
}
