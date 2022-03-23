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
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}
  getAllEmployee(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'get-employee');
  }
}
