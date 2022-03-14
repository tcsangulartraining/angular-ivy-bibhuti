import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
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
    console.log(this.loginForm.invalid);
    if (this.loginForm.valid) {
      this.router.navigate(['/all-employee']);
    }
  }
}
