import { Component, OnInit } from '@angular/core';
import { TrabajosService } from 'src/app/services/trabajos.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MailerService } from 'src/app/services/mailer.service';

@Component({
  selector: 'app-register-t',
  templateUrl: './register-t.component.html',
  styleUrls: ['./register-t.component.css']
})
export class RegisterTComponent implements OnInit {

  constructor(private traService:TrabajosService, private router:Router, private authService:AuthService, private mailerService:MailerService) { }

  ngOnInit(): void {
  }

  id = this.authService.getID()
  email:any
  ID:any

  trabajo = {id:this.id,descripcion:"",habilidadesN:"",horarios:"",idAspirantes:""}

  registrarT(){
    console.log(this.trabajo)
    this.traService.registrarTra(this.trabajo)
    .subscribe(
      res => {
        alert("Ingreso un nuevo trabajo")
        this.router.navigate(['/empresa'])
      },
      err => console.log(err)
    )

    this.traService.getTC(this.trabajo)
    .subscribe(
      res => {
        this.email = res.email
        console.log(this.email)

        var URL = '?email=' + this.email

        window.open("http://localhost:3000/enviarVacante/"+URL, "_blank") 
      },
      err => console.log(err)
    )

    /* this.mailerService.enviarVacante(this.email) */

    
    
  }

}
