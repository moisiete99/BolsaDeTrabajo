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
    //console.log(this.aspirante)

    /*this.aspService.getAspirante(this.aspirante)
    .subscribe(
      res => {
        this.aspirante = res
        console.log(this.aspirante)
      },
      err => console.log(err)
    )*/
    /*this.aspService.setIdAsp(this.aspirante)
    this.router.navigate(['/verAspirantes'])*/

    
    /*this.aspService.getAspirante(this.aspirante)
    .subscribe(
      res => {
        this.aspirantes = res
        console.log(this.aspirantes)
      },
      err => console.log(err)
    )*/
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
