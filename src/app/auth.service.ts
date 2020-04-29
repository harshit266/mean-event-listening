import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private loggedInStatus= false 
  constructor(private http :HttpClient) { }

  setLoggedIn(value: boolean)
  {
    this.loggedInStatus=value;
  }
  get isLoggedIn(){
    return this.loggedInStatus
  }

  getUserDetails(username, password){

  }

}
