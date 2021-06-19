import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http:HttpClient, private authService:AuthService) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  URL = "http://localhost:3500"

  getAllEmpresas(){
    return this.http.get<any>(this.URL + "/empresas")
  }

  getEmpresa(empresa:any){
    return this.http.post<any>(this.URL + '/empresa', empresa)
  }

  registrarEmp(empresa:any){
    console.log(empresa)
    return this.http.post<any>(this.URL + '/registerE', empresa)
  }
}
