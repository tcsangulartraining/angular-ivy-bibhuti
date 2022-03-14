import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  public loginForm: FormGroup;
  public formWasSubmitted: boolean;
  get loginFormData() {
    return this.loginForm.controls;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
          ),
        ],
      ],
      pwd: ['', Validators.required],
    });
  }
  loginFormSubmit() {
    this.formWasSubmitted = true;

    if (this.loginForm.valid) {
      // localStorage.setItem('Users', JSON.stringify(this.loginForm.value));
      // const user = this.authService.authUser(this.loginForm.value);
      // console.log(user);
      // if (user) {
      //   localStorage.setItem('isLoggin', 'true');
      //   this.router.navigate(['/all-employee']);
      // } else {
      //   localStorage.setItem('isLoggin', 'false');
      //   console.log('Login Failed');
      //   this.router.navigate(['/']);
      // }
      this.authService.authUser(this.loginForm.value).subscribe((data) => {
        console.log('Is Login Success: ' + data);

        if (data) this.router.navigate(['/all-employee']);
      });
    }
  }
}