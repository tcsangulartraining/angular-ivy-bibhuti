import { Employee } from './../employee/employee.model';
import { Action } from '@ngrx/store';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

const initialState: Employee = {
  fname: 'Bibhuti',
  lname: 'Satpathy',
  email: 'bibhuti@gmail.com',
  phone: 1234569870,
};

export function addEmployeeReducer(state: Employee[] = [initialState], action) {
  switch (action.type) {
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
