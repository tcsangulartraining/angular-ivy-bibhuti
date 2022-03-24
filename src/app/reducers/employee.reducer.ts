import { Employee } from './../employee/employee.model';
//import * as EmployeeActions from './../actions/employee.actions';
import { Action } from '@ngrx/store';

//export type Action = EmployeeActions.All;

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

const initialState: Employee = {
  id: 'asd-asd-asd-asd',
  fname: 'Bibhuti',
  lname: 'Satpathy',
  email: 'bibhuti@gmail.com',
  phone: 1234569870,
};

export function addEmployeeReducer(state: Employee[] = [initialState], action) {
  switch (action.type) {
    // case EmployeeActions.GET_EMPLOYEE:
    //   return { ...state, loading: true };
    // case EmployeeActions.GET_EMPLOYEE_SUCCESS:
    //   return { ...state, ...action.payload, loading: false };
    case ADD_EMPLOYEE:
      return [...state, action.payload];
    case REMOVE_EMPLOYEE:
      let newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}
