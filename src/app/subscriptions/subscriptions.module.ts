import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import {SubsciptionStatusComponent} from './subsciption-status/subsciption-status.component';


@NgModule({
  declarations: [
    SubsciptionStatusComponent
  ],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule
  ]
})
export class SubscriptionsModule { }
