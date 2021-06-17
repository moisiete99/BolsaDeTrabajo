import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { EmpresasService } from 'src/app/services/empresas.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-e',
  templateUrl: './register-e.component.html',
  styleUrls: ['./register-e.component.css']
})
export class RegisterEComponent implements OnInit {

  constructor(private empService:EmpresasService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  id = this.authService.getID()

  empresa = {id:this.id,pais:"",estado:"",municipio:"",direccion:"",descripcion:"",foto:""}

  registrarE(){
    console.log(this.empresa)
    this.empService.registrarEmp(this.empresa)
    .subscribe(
      res => {
        console.log(res)
        alert("Ingreso sus datos")
        this.router.navigate(['/empresa'])
      },
      err => console.log(err)
    )
  }

}
