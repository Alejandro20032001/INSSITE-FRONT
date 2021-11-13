import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LinkMaterial } from '../ventana-principal-anadir-material-modulo/entities/LinkMaterial';

@Component({
  selector: 'app-link-material',
  templateUrl: './link-material.component.html',
  styleUrls: ['./link-material.component.scss']
})
export class LinkMaterialComponent implements OnInit {

  linkMaterial: LinkMaterial = {
    link:"",
    descripcion:""
  };

  constructor(
    private router:Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  guardar():void{
    if(this.linkMaterial.link.length === 0){
      alert("La URL es obligatoria");
    }else if(this.linkMaterial.descripcion.length === 0){
      alert("La descripcion es obligatoria");
    }else{
      this.router.navigate(['materialModulo']);
    }
  }
}
