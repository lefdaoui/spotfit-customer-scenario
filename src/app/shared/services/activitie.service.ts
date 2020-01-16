import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Activity} from '../models/activity';
import {ACTIVITIES} from '../data/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private notifications: BehaviorSubject<Activity[]> = new BehaviorSubject(ACTIVITIES as Activity[]);
  readonly onActivitiesChanged$: Observable<Activity[]> = this.notifications.asObservable();

  constructor() {}

  getActivities() {
    return this.notifications.getValue();
  }
}
