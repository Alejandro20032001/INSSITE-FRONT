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
    //this.router.navigate(['materialModulo']);
    console.log(this.linkMaterial.link);
    console.log(this.linkMaterial.descripcion);
  }
}
