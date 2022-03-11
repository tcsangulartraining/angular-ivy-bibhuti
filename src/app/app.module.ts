import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { StoreModule } from '@ngrx/store';
import { addEmployeeReducer } from './reducers/employee.reducer';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ employee: addEmployeeReducer }),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeComponent,
    EmployeeFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
