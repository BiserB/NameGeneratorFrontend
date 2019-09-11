import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(private http: HttpClient) {
   }

   getNames(){

      return this.http.get<string[]>("https://localhost:50000/api/values/fetch", { withCredentials: true });
   }

}
