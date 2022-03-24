import {
  employeeActionTypes,
  employeeLoaded,
  updateEmployee,
} from './employee.actions';
import { EmployeeService } from '../../services/employee.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CourseEffects {
  loadEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActionTypes.loadCourses),
      concatMap(() => this.employeeService.getAllEmployee()),
      map((employees) => employeeActionTypes.employeeLoaded({ employees }))
    )
  );

  createEmployee$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(employeeActionTypes.createEmployee),
        concatMap((action) =>
          this.employeeService.createEmployee(action.employee)
        ),
        tap(() => this.router.navigateByUrl('/all-employee'))
      ),
    { dispatch: false }
  );

  deleteEmployee$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(employeeActionTypes.deleteEmployee),
        concatMap((action) =>
          this.employeeService.deleteEmployee(action.employeeId)
        )
      ),
    { dispatch: false }
  );

  updateEmployee$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(employeeActionTypes.updateEmployee),
        concatMap((action) =>
          this.employeeService.updateEmployee(
            action.update.id,
            action.update.changes
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private employeeService: EmployeeService,
    private actions$: Actions,
    private router: Router
  ) {}
}
