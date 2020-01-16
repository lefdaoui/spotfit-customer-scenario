import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaymentRoutingModule} from './payment-routing.module';
import {CheckoutComponent} from './checkout/checkout.component';
import {GymsModule} from '../gyms/gyms.module';
import {NgbDatepickerModule, NgbDropdownMenu, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {CreditCardsComponent} from './credit-cards/credit-cards.component';
import {CreditCardItemComponent} from './credit-cards/credit-card-item/credit-card-item.component';
import {SharedModule} from '../shared/shared.module';
import { CardFormComponent } from './credit-cards/card-form/card-form.component';
import {KycModule} from '../kyc/kyc.module';


@NgModule({
  declarations: [
    CheckoutComponent,
    CreditCardsComponent,
    CreditCardItemComponent,
    CardFormComponent,
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    NgbDatepickerModule,
    SharedModule,
    NgbDropdownModule,
    KycModule,
  ],
})
export class PaymentModule {
}
