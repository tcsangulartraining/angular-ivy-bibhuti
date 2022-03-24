import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeResolver } from './employee/employee.resolver';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'all-employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
