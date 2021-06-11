import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private hhtp:HttpClient, private authService:AuthService) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  URL = "http://localhost:3500"

  getAllEmpresas(){
    return this.hhtp.get<any>(this.URL + "/empresas")
  }
}
