import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AspirantesService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  URL = "http://localhost:3500"

  getAllAspirantes(){
    return this.http.get<any>(this.URL + "/aspirantes");
  }

  /* Original
  constructor(private http: HttpClient, private authService: AuthService) { }
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  URL = "http://localhost:3500"

  getAllAspirantes(){
    return this.http.get<any>(this.URL + "/aspirantes");
  } */
}