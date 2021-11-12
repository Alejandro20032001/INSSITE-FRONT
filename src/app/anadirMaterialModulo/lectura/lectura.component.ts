import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.scss']
})
export class LecturaComponent implements OnInit {

  constructor(
    private router:Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    console.log(this.cookieService.get('idModulo'));
  }

  guardar():void{
    this.router.navigate(['materialModulo']);
  }

}
