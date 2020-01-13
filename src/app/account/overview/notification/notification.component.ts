import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Notification} from '../../../shared/models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input()
  notification: Notification;

  @Output()
  onPanLeft: EventEmitter<Event> = new EventEmitter<Event>();

  @Output()
  onPanRight: EventEmitter<Event> = new EventEmitter<Event>();

  @Output()
  onTap: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() {
  }

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

  panLeft($event: Event) {
    this.onPanLeft.emit($event);
  }

  panRight($event: any) {
    this.onPanRight.emit($event);
  }

  tap($event: any) {
    this.onTap.emit($event);
  }
}
