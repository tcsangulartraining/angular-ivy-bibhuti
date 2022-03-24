import { EmployeeEffects } from './store/employee.effects';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { employeeReducer } from './store/employee.reducers';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee.component';
import { DynamicComponent } from '../dynamic/dynamic.component';

@NgModule({
  declarations: [EmployeeFormComponent, EmployeeComponent, DynamicComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('employees', employeeReducer),
    EffectsModule.forFeature([EmployeeEffects]),
  ],
  providers: [EmployeeService],
  bootstrap: [],
  exports: [EmployeeComponent, EmployeeFormComponent, DynamicComponent],
})
export class EmployeeModule {}
