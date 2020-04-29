import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventViewService {

  constructor(private http :HttpClient) { }
  uri='http://localhost:4000';
  getEvent() {
    return this
           .http
           .get(`${this.uri}/viewEvent/`);
  }
}
