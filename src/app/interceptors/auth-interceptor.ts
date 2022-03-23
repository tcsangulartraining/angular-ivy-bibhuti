import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environments';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('logged in',this.authService.isLogin());
    //console.log('requesturl ', request.url);
    //console.log('environmenturl',enviro)
    //console.log(request);
    //Add Silent token renew///////////////////////
    if (
      this.authService.isLogin() == 'true' &&
      request.url.includes(environment.apiUrl)
    ) {
      request = request.clone({
        setHeaders: {
          'x-access-token': JSON.parse(localStorage.getItem('logginData'))
            .token,
        },
      });
    }
    return next.handle(request);
  }
}
