import { Component, OnInit } from '@angular/core';

import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-aspirante',
  templateUrl: './aspirante.component.html',
  styleUrls: ['./aspirante.component.css']
})
export class AspiranteComponent implements OnInit {

  constructor(private empService: EmpresasService) { }

  empresas = [];

  ngOnInit(): void {
    this.empService.getAllEmpresas()
    .subscribe(
      res => {
        this.empresas = res
        console.log(this.empresas)
      },
      err => console.log(err)
    )
  }

}
