import { Component, VERSION } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Employee form';
  isUserLoggedIn;

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe((val) => {
      // see also
      console.log(val instanceof NavigationEnd);
    });
  }

  ngOnInit() {
    if (this.authService.isLogin()) this.isUserLoggedIn = true;
    else this.isUserLoggedIn = false;
    console.log(this.isUserLoggedIn);
    // let storeData = localStorage.getItem('isUserLoggedIn');
    // console.log('StoreData: ' + storeData);
    // if (storeData != null && storeData == 'true') this.isUserLoggedIn = true;
    // else this.isUserLoggedIn = false;
  }
}