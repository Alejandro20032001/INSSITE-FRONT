import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-link-material',
  templateUrl: './link-material.component.html',
  styleUrls: ['./link-material.component.scss']
})
export class LinkMaterialComponent implements OnInit {

  constructor(
    private router:Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  guardar():void{
    this.router.navigate(['materialModulo']);
  }
}
