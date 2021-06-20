import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  constructor(private http:HttpClient, private authService:AuthService) { }
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  URL = "http://localhost:3500"

  getAllTrabajos(){
    return this.http.get<any>(this.URL + '/trabajos')
  }

  getTrabajo(trabajo:any){
    return this.http.post<any>(this.URL + '/trabajo', trabajo)
  }

  registrarTra(trabajo:any){
    return this.http.post<any>(this.URL + '/registerT', trabajo)
  }

  getTC(trabajo:any){
    return this.http.post<any>(this.URL + '/getTC', trabajo)
  }

}
