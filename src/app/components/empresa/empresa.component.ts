import { Component, OnInit } from '@angular/core';

import { AspirantesService } from 'src/app/services/aspirantes.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

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
