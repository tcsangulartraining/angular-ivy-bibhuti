import { areEmployeeLoaded } from './store/employee.selectors';
import { loadEmployee, employeeLoaded } from './store/employee.actions';
import { AppState } from './../store/reducers/index';
import { Employee } from '../employee/employee.model';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, tap } from 'rxjs/operators';

@Injectable()
export class EmployeeResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areEmployeeLoaded),
      tap((employeeLoaded) => {
        console.log('111', employeeLoaded);
        if (!employeeLoaded) {
          this.store.dispatch(loadEmployee());
        }
      }),
      filter((employeeLoaded) => employeeLoaded),
      first()
    );
  }
}
