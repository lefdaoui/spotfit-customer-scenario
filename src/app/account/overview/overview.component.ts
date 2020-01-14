import { Component, OnInit } from '@angular/core';
import {Notification} from '../../shared/models/notification';
import {NOTIFICATIONS} from '../../shared/data/notifications';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  notifications: Notification[] = NOTIFICATIONS;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
