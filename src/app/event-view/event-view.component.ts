import { Component, OnInit } from '@angular/core';
import {EventViewService} from './event-view.service';
import {Event} from '../../server/src/api/v1/event/event.model';
@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {
user
  constructor(private EventViewService:EventViewService) { }

  ngOnInit() {
    this.EventViewService
    .getEvent()
    .subscribe((data: Event[]) => {
      this.user = data;
      console.log(this.user)
  });
  }

}
