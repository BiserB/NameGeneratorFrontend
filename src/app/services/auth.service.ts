import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(model: LoginModel){

    return this.http.post("https://localhost:50000/api/auth/login", model, { withCredentials: true });
  }

  logout(){

    return this.http.post("https://localhost:50000/api/auth/logout", { withCredentials: true });
  }
}
