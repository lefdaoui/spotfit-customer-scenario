import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Notification} from '../models/notification';
import {NOTIFICATIONS} from '../data/notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: BehaviorSubject<Notification[]> = new BehaviorSubject(NOTIFICATIONS as Notification[]);
  readonly onNotificationsChanged$: Observable<Notification[]> = this.notifications.asObservable();

  constructor() {}

  getNotifications() {
    return this.notifications.getValue();
  }
}
