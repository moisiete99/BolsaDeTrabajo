import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  user = {email:"", password:""}

  id:any

  signin(){
    this.authService.signIn(this.user)
    .subscribe(
      res => {
        console.log(res)
        if(res){
          this.id = res.id
          console.log(res.pemiso)
          console.log(res.tipo)
          this.authService.setID(this.id)
        }
      },
      err => console.log(err)
    )

    this.authService.setEmail(this.user)

    this.authService.verify(this.user)
    .subscribe(
      res => {
        if(res.tipo == "A"){
          this.router.navigate(['/aspirante'])
        }
        else if(res.tipo == "E"){
          this.router.navigate(['/empresa'])
        }
      },
      err => console.log(err)
    )
  }

  /* Original
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  user = {email:"", password:""}

  signin(){
    this.authService.signIn(this.user)
    .subscribe(
      res => {
        console.log(res);
        if(res){
          console.log(res.pemiso)
        }
      },
      err => console.log(err)
    )
  } */

}
