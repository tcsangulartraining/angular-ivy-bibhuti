import { Employee } from './employee/employee.model';

export interface AppState {
  readonly employee: Employee[];
}
