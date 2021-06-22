import { Component, OnInit } from '@angular/core';

import { EmpresasService } from 'src/app/services/empresas.service';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-aspirante',
  templateUrl: './aspirante.component.html',
  styleUrls: ['./aspirante.component.css']
})
export class AspiranteComponent implements OnInit {

  constructor(private empService: EmpresasService, private traService:TrabajosService) { }

  empresas = [];

  trabajos = []

  ngOnInit(): void {
    this.verTrabajos()
  }

  //Funcion para mandar llamar los trabajos que estan en la base de datos
  verTrabajos(){
    this.traService.getAllTrabajos()
    .subscribe(
      res => {
        this.trabajos = res
        console.log(this.trabajos)
      },
      err => console.log(err)
    )
  }

}
