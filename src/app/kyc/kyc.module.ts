import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KycRoutingModule} from './kyc-routing.module';
import {CardFrontsideComponent} from './card-frontside/card-frontside.component';
import {NgbDatepickerModule, NgbDropdownModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {CardBacksideComponent} from './card-backside/card-backside.component';
import {SelfieComponent} from './selfie/selfie.component';
import {ConfirmIdentityComponent} from './confirm-identity/confirm-identity.component';


@NgModule({
  declarations: [CardFrontsideComponent, CardBacksideComponent, SelfieComponent, ConfirmIdentityComponent],
  imports: [
    CommonModule,
    KycRoutingModule,
    NgbDatepickerModule,
    SharedModule,
    NgbDropdownModule,
    NgbModalModule
  ],
  exports: [
    ConfirmIdentityComponent,
  ],
})
export class KycModule {
}
