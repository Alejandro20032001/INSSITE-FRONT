import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Modulo } from 'src/app/models/modulo';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit {

  @Input() modulo : Modulo = new Modulo("","Mates",2);

  modul: Modulo={idModulo: " ",nombre: '', duracion: 0};

  constructor(private moduleService: LoginService, private router: Router, private cookieService: CookieService) { 
    
  }

  ngOnInit(): void {
  }

  borrarModulo(id:string){
    this.moduleService.borrarModulo(id).subscribe(res => {alert("Modulo eliminado")})
  }

  modificarModulo(id:string){
    this.cookieService.set('idModulo',id);
    this.router.navigate(['./materialModulo']);
  }

}
