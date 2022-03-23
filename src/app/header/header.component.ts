import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn;
  username: string = '';
  constructor(private authService: AuthService, private router: Router) {
    const navEndEvent$ = router.events.pipe(
      filter((e) => e instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((e: NavigationEnd) => {
      //console.log(e);
      if (this.authService.isLogin() == 'true') {
        this.isUserLoggedIn = true;
        this.checkTokenExpiry(JSON.parse(localStorage.getItem('logginData')));
      } else {
        this.isUserLoggedIn = false;
      }
    });
  }
  checkTokenExpiry(data) {
    //console.log(data);
    this.username = data.first_name;
    let token = data.token.split('.')[1];
    token = atob(token);
    let json = JSON.parse(token);
    //console.log(json);
    let exp = json.exp * 1000;
    let current = Date.now();
    if (exp < current) {
      alert('Login session has been expired');
      this.authService.logout();
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {}
}
