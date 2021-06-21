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
