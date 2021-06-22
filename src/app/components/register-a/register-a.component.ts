import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AspirantesService } from 'src/app/services/aspirantes.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-a',
  templateUrl: './register-a.component.html',
  styleUrls: ['./register-a.component.css']
})
export class RegisterAComponent implements OnInit {

  constructor(private aspService: AspirantesService, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  id = this.authService.getID()

  aspirante = {id:this.id,apellidos:"",edad:"",pais:"",estado:"",municipio:"",direccion:"",acercade:"",descripcion:"",habilidades:"",foto:""}  

  //Funcion para registrar los datos restantes de un aspirante
  registrarA(){
    console.log(this.aspirante)
    this.aspService.registrarAsp(this.aspirante)
    .subscribe(
      res => {
        console.log(res);
        alert("Ingreso sus datos")
        this.router.navigate(['/aspirante'])
      },
      err => console.log(err)
    )
  }
}
