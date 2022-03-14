import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
    console.log('Url: ' + url);
    let val: string = localStorage.getItem('isUserLoggedIn');
    alert(val);
    if (val != null && val == 'true') {
      if (url == '/login') this.router.parseUrl('/all-employee');
      else return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
