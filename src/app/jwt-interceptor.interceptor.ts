import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.cookieService.get('token');
    let req = request;
    if(token){
      console.log('hay token')
      //req.clone({ headers: req.headers.set('x-access-token', 'Bearer' +token) });
      //req.headers.set('x-access-token',`Bearer ${token}`)
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
      //console.log(request)
    }else{
      this.router.navigate((['./login']));
    }
    //console.log(req);
    return next.handle(request);
  }
}
