import { EmployeeState } from './employee.reducers';
import { Employee } from '../employee.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './employee.reducers';

export const employeeFeatureSelector =
  createFeatureSelector<EmployeeState>('employees');

export const getAllEmployees = createSelector(
  employeeFeatureSelector,
  selectAll
);

export const areEmployeeLoaded = createSelector(
  employeeFeatureSelector,
  (state) => state.employeeLoaded
);
