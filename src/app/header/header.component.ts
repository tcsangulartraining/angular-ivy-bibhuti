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

  constructor(private authService: AuthService, private router: Router) {
    // router.events.subscribe((val) => {
    //   // see also
    //   console.log(val instanceof NavigationEnd);
    // });
    const navEndEvent$ = router.events.pipe(
      filter((e) => e instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((e: NavigationEnd) => {
      //console.log(e);
      if (this.authService.isLogin()) this.isUserLoggedIn = true;
      else this.isUserLoggedIn = false;
    });
  }

  ngOnInit() {}
}
