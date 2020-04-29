import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminLoginServiceService {
  uri='http://localhost:4000';
  
  constructor(private http: HttpClient) { }
 
 	checkLoginCredentials(formdata) {
   const obj = {
     email: formdata.email,
     password: formdata.password,
   };
   console.log(obj)
   return this.http.post(`${this.uri}/login`, obj);

 }
}
