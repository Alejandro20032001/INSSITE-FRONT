import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {

  constructor(
    private router:Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  guardar():void{
    this.router.navigate(['materialModulo']);
  }
}
