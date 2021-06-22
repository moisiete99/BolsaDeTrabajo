import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AspirantesService } from 'src/app/services/aspirantes.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor(private aspService: AspirantesService, private router:Router) { }

  aspirantes = []
  aspirantes2 = []

  aspirante = {id:""}

  show:any

  ngOnInit(): void {
    this.show = true;
    this.verAspirantes()
  }

  //Funcion para mostrar todos los apirantes registrados
  verAspirantes(){
    this.aspService.getAllAspirantes()
    .subscribe(
      res => {
        this.aspirantes = res
        console.log(this.aspirantes)
      },
      err => console.log(err)
    );
  }

  //Funcion para mostrar un aspirante en especifico definiendo la busqueda por el id
  verAspirante(){
    this.show = false
    console.log(this.aspirante)
    this.aspService.getAspirante(this.aspirante)
    .subscribe(
      res => {
        this.aspirantes2 = res
        console.log(res)
      },
      err => console.log(err)
    );
  }

  /* Original
  constructor(private aspService: AspirantesService) { }

  aspirantes = [];

  ngOnInit(): void {
    this.aspService.getAllAspirantes()
    .subscribe(
      res => {
        this.aspirantes = res
        console.log(this.aspirantes)
      },
      err => console.log(err)
    );
  } */

}
