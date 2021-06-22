import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  email = {email:this.authService.getEmail()}
  id:any

  //Funcion para redireccionar al componente esfecifico para un usuario
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

  //Funcion que elimina los datos de la cuenta que esta logueada
  delete(){
    this.id = {id: this.authService.getID()}
    this.authService.delete(this.id)
    .subscribe(
      res => {
        console.log(res)
        alert("Se a eliminado tu cuenta")
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

  //Funcion para cerrar sesion que eliminar las variables de sesion y nos redirecciona
  logout(){
    this.authService.deleteToken()
    this.router.navigate(['/'])
  }

}
