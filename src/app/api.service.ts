import { EventEmitter, Injectable, Output } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Correo } from './correo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl: string | undefined;
  baseUrl:string = "http://localhost/bolsadetrabajo/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  
  constructor(private httpClient : HttpClient) { }
  
  public loginA(username: any, password: any) {
    //alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/loginA.php', { username, password })
    .pipe(map(Users => {
      this.setToken(Users[0].name);
      this.getLoggedInName.emit(true);
      //alert(Users)
      return Users;
    }));
  }
  public loginE(username:any, password:any){
    alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/loginE.php', {username, password})
    .pipe(map(Users => {
      this.setToken(Users[0].name);
      this.getLoggedInName.emit(true);
      //alert(Users)
      return Users;
    }));
  }

  public userregistration(name: any,email: any,pwd: any) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
    .pipe(map(Users => {
      return Users;
    }));
  }

  //public leerCuentas()

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}
