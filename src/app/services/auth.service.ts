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

  authUser(user: any): Observable<any> {
    console.log(user);
    return this.httpClient.post(environment.apiUrl + 'login', user);
  }
  isLogin() {
    return localStorage.getItem('isUserLoggedIn');
  }
  logout(): void {
    localStorage.clear();
  }
}
