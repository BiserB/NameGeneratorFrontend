import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedId(){

    return this.http.get<boolean>("https://localhost:55000/api/auth/isLoggedIn", { withCredentials: true })
  }

  login(model: LoginModel){

    //return this.http.post("https://localhost:50000/api/auth/login", model, { withCredentials: true });
    return this.http.post("https://localhost:55000/api/auth/authenticate", model, { withCredentials: true });
  }

  logout(){

    return this.http.post("https://localhost:55000/api/auth/logout", null, { withCredentials: true });
  }
}
