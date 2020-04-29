import { Component, OnInit } from '@angular/core';
import {EventFormService} from './event-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  constructor(private EventFormService:EventFormService,
              private router :Router
              ) { }

  ngOnInit() {
  }
  addEvent(form) {
    // console.log("-------",form.controls.email._parent.status)
    console.log("---------------------")
    
   this.EventFormService.addEvent(form.value);
  }
  view(){
    console.log("aa gya ")
    this.router.navigate([`event-view`]);
  }

}
