import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employees: Observable<Employee[]>;
  public empForm: FormGroup;
  public formWasSubmitted: boolean;
  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    //this.employees = this.store.select((state) => state.employee);
  }
  get empFormData() {
    return this.empForm.controls;
  }
  ngOnInit() {
    this.empForm = this.formBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
          ),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^-?(0|[0-9]\d*)?$/),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  empFormSubmit() {
    this.formWasSubmitted = true;
    console.log(this.empForm.invalid);
    if (!this.empForm.invalid) {
      this.store.dispatch({
        type: 'ADD_EMPLOYEE',
        payload: <Employee>this.empForm.value,
      });
    }
  }
}
