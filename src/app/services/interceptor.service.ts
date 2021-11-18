import {Injectable} from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  construct() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(error => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // backend error
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
        }
        console.log(error.error.message);

        if(error.error.message === 'Username already exist'){
          alert('El nombre de usuario ya existe');
        }

        if(error.error.message === 'Login user or password does not match.'){
          alert('El nombre de usuario o la contraseña son incorrectos');
        }

        return throwError(errorMessage);
      })
    );
  }
}
