import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import {OverviewComponent} from './overview/overview.component';
import {NotificationComponent} from './overview/notification/notification.component';
import {TabsModule} from 'ngx-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {NotificationsListComponent} from './notifications-list/notifications-list.component';
import {ProfileComponent} from './profile/profile.component';


@NgModule({
  declarations: [OverviewComponent, NotificationComponent, NotificationsListComponent, ProfileComponent, ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    TabsModule.forRoot(),
  ]
})
export class AccountModule { }
