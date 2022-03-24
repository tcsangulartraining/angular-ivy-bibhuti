import { Employee } from '../employee.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  employeeActionTypes,
  employeeLoaded,
  updateEmployee,
} from './employee.actions';

export interface EmployeeState extends EntityState<Employee> {
  employeeLoaded: boolean;
}

export const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();

export const initialState = adapter.getInitialState({
  coursesLoaded: false,
});

export const employeeReducer = createReducer(
  initialState,

  on(employeeActionTypes.employeeLoaded, (state, action) => {
    return adapter.setAll(action.employees, { ...state, coursesLoaded: true });
  }),

  on(employeeActionTypes.createEmployee, (state, action) => {
    return adapter.addOne(action.employee, state);
  }),

  on(employeeActionTypes.deleteEmployee, (state, action) => {
    return adapter.removeOne(action.employeeId, state);
  }),

  on(employeeActionTypes.updateEmployee, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
