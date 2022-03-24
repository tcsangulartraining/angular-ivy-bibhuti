import { Action } from '@ngrx/store';
import { Employee } from './../employee/employee.model';

export const GET_EMPLOYEE = 'Employee get';
export const GET_EMPLOYEE_SUCCESS = 'Employee get success';

export class GetEmployee implements Action {
  readonly type = GET_EMPLOYEE;
  constructor(public payload: string) {}
}

export class GetEmployeeSuccess implements Action {
  readonly type = GET_EMPLOYEE_SUCCESS;
  constructor(public payload: Employee) {}
}

export type All = GetEmployee | GetEmployeeSuccess;
