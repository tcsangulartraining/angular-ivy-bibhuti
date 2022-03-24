import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Employee } from './../employee/employee.model';
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
  getAllEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(environment.apiUrl + 'employee');
  }
  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(
      environment.apiUrl + 'employee',
      employee
    );
  }

  deleteEmployee(employeeId: string): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + 'employee' + employeeId);
  }

  updateEmployee(
    employeeId: string | number,
    changes: Partial<Employee>
  ): Observable<any> {
    return this.httpClient.put(
      environment.apiUrl + 'employee' + employeeId,
      changes
    );
  }
}
