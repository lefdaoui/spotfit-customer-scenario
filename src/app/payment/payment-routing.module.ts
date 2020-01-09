import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckoutComponent} from './checkout/checkout.component';
import {CreditCardsComponent} from './credit-cards/credit-cards.component';
import {CardFormComponent} from './credit-cards/card-form/card-form.component';

const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'credit-cards',
    component: CreditCardsComponent
  },
  {
    path: 'card-form',
    component: CardFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
