import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SubscriptionsRoutingModule} from './subscriptions-routing.module';
import {SubsciptionStatusComponent} from './subsciption-status/subsciption-status.component';
import {GymsModule} from '../gyms/gyms.module';


@NgModule({
  declarations: [
    SubsciptionStatusComponent
  ],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    GymsModule
  ]
})
export class SubscriptionsModule {
}
