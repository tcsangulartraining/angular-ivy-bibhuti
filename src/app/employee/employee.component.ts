import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ElementRef,
  ViewContainerRef,
  AfterViewInit,
} from '@angular/core';
import { Employee } from './employee.model';

import { Observable } from 'rxjs';

import { DynamicComponent } from '../dynamic/dynamic.component';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements AfterViewInit, OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  employees: Observable<Employee[]>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      this.loadInitialData();
    }, 1000);
  }
  ngAfterViewInit() {
    //
  }
  loadInitialData(): void {
    const viewContainerRef = this.container;
    viewContainerRef.clear();

    // create the component factory
    const dynamicComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    // add the component to the view
    const componentRef = this.container.createComponent(
      dynamicComponentFactory
    );
  }
}
