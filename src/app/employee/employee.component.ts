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

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements AfterViewInit, OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  employees: Observable<Employee[]>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
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
