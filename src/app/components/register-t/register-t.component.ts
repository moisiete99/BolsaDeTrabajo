import { Component, OnInit } from '@angular/core';
import { TrabajosService } from 'src/app/services/trabajos.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-t',
  templateUrl: './register-t.component.html',
  styleUrls: ['./register-t.component.css']
})
export class RegisterTComponent implements OnInit {

  constructor(private traService:TrabajosService, private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  id = this.authService.getID()

  trabajo = {id:this.id,descripcion:"",habilidadesN:"",horarios:"",idAspirantes:""}

  registrarT(){
    this.traService.registrarTra(this.trabajo)
    .subscribe(
      res => {
        alert("Ingreso un nuevo trabajo")
        this.router.navigate(['/empresa'])
      },
      err => console.log(err)
    )
  }

}
