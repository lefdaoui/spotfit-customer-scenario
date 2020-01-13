import {Component, Input, OnInit} from '@angular/core';
import {Notification} from '../../../shared/models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() notification: Notification;

  constructor() { }

  ngOnInit() {
  }

  getNotificationIconColor(type: 'message' | 'subscription-status' | 'refer-friend') {
    switch (type) {
      case 'message':
        return 'purple';
      case 'subscription-status':
        return 'orange';
      case 'refer-friend':
        return 'blue';
    }
  }
}
