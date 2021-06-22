import { Component, OnInit } from '@angular/core';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-del-trabajo',
  templateUrl: './del-trabajo.component.html',
  styleUrls: ['./del-trabajo.component.css']
})
export class DelTrabajoComponent implements OnInit {

  constructor(private traService:TrabajosService) { }

  ngOnInit(): void {
    this.verTrabajos()
  }

  trabajo = {id:""}
  trabajos = []

  //Funcion para mostrar en el HTML los trabajos registrados
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

  //Funcion donde se manda un id para eliminar un trabajo
  delTrabajo(){
    this.traService.delTrabajo(this.trabajo)
    .subscribe(
      res => {
        console.log(res)
        alert("Se ha eliminado el trabajo")
        location.reload()
      },
      err => console.log(err)
    )
  }

}
