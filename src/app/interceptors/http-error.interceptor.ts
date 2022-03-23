import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,

    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('err', err);
        if (err.status === 401) {
          alert(err.error);
          // this.auth.logout();
          // this.router.navigate(['/login']);
        }
        //TODO: Add this if we will need roles
        if (err.status === 403) {
          //location.reload();
          alert(err.error);
          // this.auth.logout();
          // this.router.navigate(['/login']);
        }

        if (err.status === 404) {
          alert('Page not found');
        }
        if (err.status === 200) {
          alert(err.error);
        }
        if (err.status === 400) {
          alert('Bad Request');
        }

        if (!window.navigator.onLine) {
          alert('No internet connection');
        }

        return throwError(err);
      })
    );
  }
}
