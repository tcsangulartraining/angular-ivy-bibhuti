import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import {
  HttpInterceptor,
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  isUserLoggedIn: boolean = false;

  authUser(user: any): Observable<any> {
    // this.isUserLoggedIn =
    //   user.email == 'admin@gmail.com' && user.pwd == 'admin';
    // localStorage.setItem(
    //   'isUserLoggedIn',
    //   this.isUserLoggedIn ? 'true' : 'false'
    // );
    // console.log(user);
    // return of(this.isUserLoggedIn).pipe(
    //   tap((val) => {
    //     console.log('Is User Authentication is successful: ' + val);
    //   })
    // );
    return this.httpClient.post(environment.apiUrl + 'login', user);
  }
  isLogin() {
    return localStorage.getItem('isUserLoggedIn');
  }
  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }
}
