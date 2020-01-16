import { Component, OnInit } from '@angular/core';
import {Notification} from '../../shared/models/notification';
import {NOTIFICATIONS} from '../../shared/data/notifications';
import {NotificationService} from '../../shared/services/notification.service';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit {
  notifications: Notification[] = [];

  positionMaxLeft = -85;
  positionMinLeft = 0;

  focusOn;

  currentStyle: any = {
    left: '0px',
    overflow: 'hidden',
  };
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.onNotificationsChanged$.subscribe(notifications => this.notifications = notifications);
  }

  onPanLeft($event: Event, id: string) {
    this.focusOn = id;
    let leftPosition: number = parseFloat(this.currentStyle.left.replace(/px/g, ''));
    leftPosition += -8;
    if (leftPosition > this.positionMaxLeft) {
      this.currentStyle.left = leftPosition + 'px';
      this.currentStyle.overflow = 'unset';
    }
  }

  onRemoveNotification(id: string) {
    // todo: remove notificaiton with id $id
    this.notifications = this.notifications.filter(notif => notif.id !== id);
  }

  onPanRight($event: Event, id: string) {
    this.focusOn = id;
    let leftPosition: number = parseFloat(this.currentStyle.left.replace(/px/g, ''));
    leftPosition += +16;
    if (leftPosition < this.positionMinLeft) {
      this.currentStyle.left = leftPosition <= 0 ? '0px' : leftPosition + 'px';
    }
  }

  getStyle(id: string) {
    if (id === this.focusOn) {
      return this.currentStyle;
    } else {
      return {
        lef: this.positionMinLeft,
        overflow: 'hidden',
      };
    }
  }

  onTap($event: Event, id: string) {
    this.focusOn = null;
  }
}
