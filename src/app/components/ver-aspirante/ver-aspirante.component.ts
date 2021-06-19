import { Component, OnInit } from '@angular/core';
import { AspirantesService } from 'src/app/services/aspirantes.service';

@Component({
  selector: 'app-ver-aspirante',
  templateUrl: './ver-aspirante.component.html',
  styleUrls: ['./ver-aspirante.component.css']
})
export class VerAspiranteComponent implements OnInit {

  constructor(private aspService:AspirantesService) { }

  ngOnInit(): void {
    this.show = true
  }

  aspirante = {id:""}
  aspirante2 = []
  show:any

  verAspirante(){
    this.show = false
    this.aspService.getAspirante(this.aspirante)
    .subscribe(
      res => {
        this.aspirante2 = res
        console.log(this.aspirante2)
      },
      err => console.log(err)
    )
  }

}
