import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService} from '../services/login.service'
import { LoginI } from '../models/login.interface'
import { ResponseI } from '../models/response.interface'

import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private http:LoginService, 
    private router:Router,
    private cookieService: CookieService,
    ) { }

  ngOnInit(): void {
  }

  onLogin(form:LoginI){
    //console.log(form);
    this.http.Login(form).subscribe(data => {
      let response:ResponseI = data

      if (response) {  //validar status
        console.log(response.data.user.userRoll);
        //localStorage.setItem('token', response.data.accessToken)
        this.cookieService.set('token', response.data.accessToken);
        //console.log(response.data.accessToken);
        if(response.data.user.roles[0] === 'ESTUDIANTE'){
          this.router.navigate(['/studentWelcomeView'])
        }else{
          this.router.navigate(['/teacher'])
        }
        console.log(response.data.user.roles)
      }
    })
  }

  goToRegister():void{
    this.router.navigate(['register']);
  }
}
