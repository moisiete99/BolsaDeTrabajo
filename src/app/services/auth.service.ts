import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  private URL = "http://localhost:3500";

  signUp(user:any){
    return this.http.post<any>(this.URL + "/signup", user)
  }

  signIn(user:any){
    return this.http.post<any>(this.URL + "/signin", user)
  }

  verify(user:any){
    return this.http.post<any>(this.URL + "/verify", user)
  }

  setID(id:any){
    sessionStorage.setItem("ID",id)
  }
  setEmail(user:any){
    sessionStorage.setItem("Email",user.email)
  }
  getID(){
    return sessionStorage.getItem("ID")
  }

  /* Original
  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  private URL = "http://localhost:3500";

  signUp(user:any){
    return this.http.post<any>(this.URL + "/signup", user)
  }

  signIn(user:any){
    return this.http.post<any>(this.URL + "/signin", user)
  } */
}
