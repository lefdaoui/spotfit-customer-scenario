import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import {CheckoutComponent} from './checkout/checkout.component';
import {GymsModule} from '../gyms/gyms.module';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
    imports: [
        CommonModule,
        PaymentRoutingModule,
        GymsModule,
        NgbDatepickerModule
    ]
})
export class PaymentModule { }
