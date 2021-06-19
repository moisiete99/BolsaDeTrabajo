import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /* loginbtn:boolean;
  logoutbtn:boolean; */

  constructor(private authService: AuthService, private router:Router) {
    /* authService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.authService.isLoggedIn()){
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true
    }
    else{
      this.loginbtn=true;
      this.logoutbtn=false
    } */
  }

  ngOnInit(): void {
  }

  email = {email:this.authService.getEmail()}

  home(){
    this.authService.verifyHome(this.email)
    .subscribe(
      res => {
        console.log(this.email)
        console.log(res)
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

  /* private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout(){
    this.authService.deleteToken();
    window.location.href = window.location.href;
    this.router.navigate(['/login'])
  } */

}
