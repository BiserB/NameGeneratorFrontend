import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(private http: HttpClient) {
   }

   getNames(){

      return this.http.get<string[]>("https://localhost:55000/home/getname");
   }

   getNames2(){

    return this.http.get<string[]>("https://localhost:55000/api/names/fetch");
  }
}
