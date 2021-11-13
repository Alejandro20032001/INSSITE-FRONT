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
    fecha: "",
    hora:"",
    descripcion:""
  };

  constructor(
    private router:Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  guardar():void{
    if (this.videollamada.link.length === 0) {
      alert("La URL es obligatoria");
    } else if(this.videollamada.fecha.length === 0){
      alert("La fecha es obligatoria");
    } else if(this.videollamada.hora.length === 0){
      alert("La hora es obligatoria");
    } else if(this.videollamada.descripcion.length === 0){
      alert("La descripcion es obligatoria");
    } else{
      this.router.navigate(['materialModulo']);
    }
  }
}
