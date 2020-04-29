import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  
  addAdmin(form) {
    
   const obj = {
     name: form.name,
     email: form.email,
     password:form.password
   };
   console.log(obj);
   return this.http.post(`${this.uri}/addAdmin`, obj)
   
    
}
}
