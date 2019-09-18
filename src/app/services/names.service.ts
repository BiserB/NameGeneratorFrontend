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

   createName(){

    return this.http.get<string>("https://localhost:50000/api/values/create", { withCredentials: true });
 }

 createNames(count: number){

  return this.http.post<string[]>("https://localhost:50000/api/values/createNames", count, { withCredentials: true });
}

}
