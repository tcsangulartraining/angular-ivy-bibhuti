import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee.model';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent implements OnInit {
  employees: Observable<Employee[]>;
  constructor(private store: Store<AppState>) {
    this.employees = this.store.select((state) => state.employee);
  }

  ngOnInit() {}
  deleteRec(i) {
    this.store.dispatch({
      type: 'REMOVE_EMPLOYEE',
      payload: i,
    });
  }
}
