import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  Observable,
  of,
  throwError,
  map,
  mergeMap,
  catchError,
  delay,
} from 'rxjs';
import { EmployeeService } from '../services/employee.service';
import * as EmployeeActions from './../actions/employee.actions';
import { Employee } from '../employee/employee.model';

export type Action = EmployeeActions.All;
@Injectable()
export class EmployeeEffects {
  constructor(private actions: Actions, private empService: EmployeeService) {}
  // @Effect()
  // getEmployee: Observable<Action> = this.actions.pipe(
  //   ofType(EmployeeActions.GET_EMPLOYEE),
  //   map((action: EmployeeActions.GetEmployee) => action.payload),
  //   delay(1000),
  //   mergeMap(() => this.empService.getAllEmployee()),
  //   map((employee) => {
  //     return new EmployeeActions.GetEmployeeSuccess(employee);
  //   })
  // );
}
