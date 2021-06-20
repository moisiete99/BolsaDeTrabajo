import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(private http:HttpClient) { }

  URL = "http://localhost:3000"

  enviarVacante(email:any){
    console.log(email)
    return this.http.get<any>(this.URL + '/enviarVacante', email)
  }

}
