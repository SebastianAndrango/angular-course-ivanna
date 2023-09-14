import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  loginForm = this.formBuilder.group({
    email: ['isandrango@espe.edu.ec', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.password;
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Llamar al servicio de login');
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    } else {
      this.loginForm.markAllAsTouched();
      alert('Error al ingresar los datos');
    }
  }
}
