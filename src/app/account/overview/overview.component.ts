import { Component, OnInit } from '@angular/core';
import {Notification} from '../../shared/models/notification';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  notifications: Notification[] = [
    {
      type: 'subscription-status',
      datetime: '2 min',
      subject: 'Pass expiration date',
      body: 'Lorem ipsum dolor sit amet, consectetur adip desiscing elit. Sed non risus. Suspendisse ...',
    },
    {
      type: 'message',
      datetime: '5 min',
      subject: 'Message from City club',
      body: 'Lorem ipsum dolor sit amet, consectetur adinbip iscing elit. Sed non risus. Suspendisse ...',
    },
    {
      type: 'refer-friend',
      datetime: '5 min',
      subject: 'Refer friends',
      body: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit pendisse .',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
