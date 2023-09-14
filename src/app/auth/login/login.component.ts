import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  loginForm = this.formBuilder.group({
    email: ['isandrango@espe.edu.ec', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as LoginRequest);
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    } else {
      this.loginForm.markAllAsTouched();
      alert('Error al ingresar los datos');
    }
  }
}
