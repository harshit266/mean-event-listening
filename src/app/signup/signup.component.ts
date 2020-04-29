import { Component, OnInit } from '@angular/core';
import {SignupService} from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private SignupService:SignupService,
    private router :Router) { }

  ngOnInit() {
  }
  addAdmin(form) {
    // console.log("-------",form.controls.email._parent.status)
    console.log("---------------------")
    // console.log(form.value.myInput.$valid)
   this.SignupService.addAdmin(form.value)
   .subscribe(
    data => {
        if(data['code'] == 200){
            alert(data['msg'])
            this.router.navigate([`login`]);
    
            }
            else if (data['code']==400){
              alert(data['msg'])
              this.router.navigate(['signup']);
            }
            else{
            alert("data not saved")
          }
        },
    error => { console.log(error); // Error if any
    });

  }
}
