import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { OverviewComponent } from './overview/overview.component';
import {GymsModule} from '../gyms/gyms.module';
import { NotificationComponent } from './overview/notification/notification.component';
import {TabsModule} from 'ngx-bootstrap';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [OverviewComponent, NotificationComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    GymsModule,
    TabsModule,
    SharedModule
  ]
})
export class AccountModule { }
