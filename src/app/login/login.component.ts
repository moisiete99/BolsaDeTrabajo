import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  postdata(angForm1: { value: { email: any; password: any; }; }){

    this.dataService.loginA(angForm1.value.email,angForm1.value.password)
    .pipe(first())
    .subscribe(
      data=> {
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/home-a';
        this.router.navigate([redirect]);
      },
      error=> {
        //alert("El correo o contraseña es incorrecta")
      }
    );

    this.dataService.loginE(angForm1.value.email, angForm1.value.password)
    .pipe(first())
    .subscribe(
      data=> {
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/home-e';
        this.router.navigate([redirect]);
      },
      error=> {
        //alert("El correo o contraseña es incorrecta")
      }
    );

    alert("El correo o contrasela es incorrecta")
  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
}
