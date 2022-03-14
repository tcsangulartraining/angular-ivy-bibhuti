import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isUserLoggedIn;

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe((val) => {
      // see also
      console.log(val instanceof NavigationEnd);
    });
  }

  ngOnInit() {}
}
