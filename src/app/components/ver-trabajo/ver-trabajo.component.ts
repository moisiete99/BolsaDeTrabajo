import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-ver-trabajo',
  templateUrl: './ver-trabajo.component.html',
  styleUrls: ['./ver-trabajo.component.css']
})
export class VerTrabajoComponent implements OnInit {

  constructor(private empService:EmpresasService, private traService:TrabajosService) { }

  ngOnInit(): void {
    this.show1 = true
    this.show2 = true
  }

  trabajo = {id:""}
  empresa = {id:""}
  trabajo2 = []
  empresa2 = []
  show1:any
  show2:any

  verTrabajo(){
    this.show1 = false
    this.traService.getTrabajo(this.trabajo)
    .subscribe(
      res => {
        this.trabajo2 = res
      },
      err => console.log(err)
    )
  }

  verEmpresa(){
    this.show2 = false
    this.empService.getEmpresa(this.empresa)
    .subscribe(
      res => {
        this.empresa2 = res
        console.log(this.empresa2)
      },
      err => console.log(err)
    )
  }

}
