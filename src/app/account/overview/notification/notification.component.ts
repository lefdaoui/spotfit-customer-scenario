import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Notification} from '../../../shared/models/notification';
import {NotificationType} from '../../../shared/enums/enums';

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

  NotificationType = NotificationType;
  constructor() {
  }

  ngOnInit() {
  }

  getNotificationIconColor(type: NotificationType) {
    switch (type) {
      case NotificationType.MESSAGE:
        return 'purple';
      case NotificationType.SUBSCRIPTION:
        return 'orange';
      case NotificationType.RELATIONSHIPS:
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
