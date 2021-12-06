import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Modulo } from 'src/app/models/modulo';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo-card',
  templateUrl: './modulo-card.component.html',
  styleUrls: ['./modulo-card.component.scss']
})
export class ModuloCardComponent implements OnInit {

  idModulo : string = ' ';
  moduloName : string = " ";
  duracion : number = 0;
  order: number = 0;

  @Input() modulo : Modulo = new Modulo("","",0,0,0);

  modul: Modulo={idModulo: " ",nombre: '', duracion: 0, order: 0, diasPrevios: 0};


  constructor(private moduleService: LoginService, private router: Router, private cookieService: CookieService)
  {}

  ngOnInit(): void {
  }

  verMaterialModulo(id:string):void{
    this.cookieService.set('idModulo',id);
    this.router.navigate(['./moduleContent']);
  }
}
