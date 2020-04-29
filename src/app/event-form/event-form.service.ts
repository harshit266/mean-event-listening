import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventFormService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  
  addEvent(form) {
    // alert("entered")
   const obj = {
     name: form.name,
     age: form.age,
     event:form.event,
     type:form.type
   };
   console.log(obj);
   this.http.post(`${this.uri}/addEvent`, obj)
   .subscribe(res => console.log('Done'));
    
}
}
