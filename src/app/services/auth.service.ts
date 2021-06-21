import { Injectable,Output,EventEmitter } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* @Output() getLoggedInName: EventEmitter<any> = new EventEmitter(); */

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

  verifyHome(email:any){
    console.log(email)
    return this.http.post<any>(this.URL + "/verifyH", email)
  }

  delete(id:any){
    return this.http.post<any>(this.URL + '/delete', id)
  }

  setID(id:any){
    sessionStorage.setItem("ID",id)
  }
  getID(){
    return sessionStorage.getItem("ID")
  }
  setEmail(user:any){
    sessionStorage.setItem("Email",user.email)
  }
  getEmail(){
    return sessionStorage.getItem("Email")
  }
  deleteToken() {
    sessionStorage.removeItem("Email")
    sessionStorage.removeItem("ID")
  }
  /* isLoggedIn() {
    const usertoken = this.getEmail();
    if (usertoken != null) {
      return true
    }
    return false;
  } */
  

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
