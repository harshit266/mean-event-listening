import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminLoginServiceService} from './admin-login-service.service';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
              private adminLoginService:AdminLoginServiceService,
              private auth :AuthService) { }

  ngOnInit() {
  }
  checkAdminCredentials(form) {
    this.adminLoginService.checkLoginCredentials(form.value)
    .subscribe(
      data => {
          if(data['code'] == 200){
              this.router.navigate([`event-form`]);
              this.auth.setLoggedIn(true)
              }
              else{
              alert(data['msg']);
            }
          },
      error => { console.log(error); // Error if any
      });

  }
}
