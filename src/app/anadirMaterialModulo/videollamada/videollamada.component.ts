import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-videollamada',
  templateUrl: './videollamada.component.html',
  styleUrls: ['./videollamada.component.scss']
})
export class VideollamadaComponent implements OnInit {

  constructor(
    private router:Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  guardar():void{
    this.router.navigate(['materialModulo']);
  }
}
