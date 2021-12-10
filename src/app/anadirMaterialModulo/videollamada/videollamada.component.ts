import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ResourceEnum } from '../ventana-principal-anadir-material-modulo/entities/ResourceEnum';
import { Videollamada } from '../ventana-principal-anadir-material-modulo/entities/Videollamada';
import { enviarMaterial } from '../ventana-principal-anadir-material-modulo/interfaces/material.interface';
import { ModuleServices } from '../ventana-principal-anadir-material-modulo/services/module.service';

@Component({
  selector: 'app-videollamada',
  templateUrl: './videollamada.component.html',
  styleUrls: ['./videollamada.component.scss']
})
export class VideollamadaComponent implements OnInit {

  videollamada: Videollamada = {
    link: "",
    fecha: "",
    hora: "",
    descripcion: ""
  };

  enviar: enviarMaterial = {
    resourceType: ResourceEnum.LINK_MEET,
    title: '',
    descriptionResource: '',
    content: '',
    module: '',
    date: new Date(),
    score: 0
  }

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private servicio: ModuleServices) { }

  ngOnInit(): void {
  }

  async guardar(): Promise<void> {
    let bandera = false;
    try {
      const url = new URL(this.videollamada.link);
    } catch (error) {
      console.log(error);
      bandera = true; // => TypeError, "Failed to construct URL: Invalid URL"
    }

    if (this.videollamada.link.length === 0) {
      alert("La URL es obligatoria");
    } else if (bandera) {
      alert("Debes ingresar una URL valida");
    }
    else if (this.videollamada.fecha.length === 0) {
      alert("La fecha es obligatoria");
    } else if (this.videollamada.hora.length === 0) {
      alert("La hora es obligatoria");
    } else if (this.videollamada.descripcion.length === 0) {
      alert("La descripcion es obligatoria");
    } else {

      let anio = parseInt(this.videollamada.fecha.split("-")[0]);
      let mes = parseInt(this.videollamada.fecha.split("-")[1]) - 1;
      let dia = parseInt(this.videollamada.fecha.split("-")[2]);
      let hora = parseInt(this.videollamada.hora.split(':')[0]);
      let minuto = parseInt(this.videollamada.hora.split(':')[1]);


      this.enviar.content = this.videollamada.link;
      this.enviar.descriptionResource = this.videollamada.descripcion;
      this.enviar.date = new Date(anio, mes, dia, hora, minuto, 0);
      this.enviar.module = this.cookieService.get('idModulo');

      let fechaInicio = new Date(this.cookieService.get("inicioModulo"));

      let fechaFin = new Date(this.cookieService.get("inicioModulo"));
      fechaFin.setHours(24 * parseInt(this.cookieService.get("duracionModulo")));
      this.enviar.date = fechaFin;

      if (this.enviar.date < fechaInicio) {
        alert("La fecha no puede ser menor a " + fechaInicio);
      } else {
        if (this.enviar.date > fechaFin) {
          alert("La fecha no puede ser mayor o igual a " + fechaFin);
        } else {

          (await this.servicio.registrar(this.enviar)).subscribe((data) => {
            if (data.message === "created") {
              console.log(data);
              this.router.navigate(['materialModulo']);
            }
          });
        }
      }
    }
  }
}
