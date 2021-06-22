import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  user = {name:"", email:"", password:"", tipo:""}

  //Funcion para registrar un nuevo usuario
  register(){
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        console.log(res);
        if(res.id){
          console.log("Se registro")
          this.router.navigate(['/'])
        }
      },
      err => console.log(err)
    )
  }

  /* Original 
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  user = {name:"", email:"", password:"", tipo:""}

  register(){
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        console.log(res);
        if(res.id){
          console.log("Se registro")
        }
      },
      err => console.log(err)
    )
  } */

}
