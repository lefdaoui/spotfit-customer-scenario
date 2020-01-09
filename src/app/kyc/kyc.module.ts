import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KycRoutingModule } from './kyc-routing.module';
import { CardFrontsideComponent } from './card-frontside/card-frontside.component';
import {GymsModule} from '../gyms/gyms.module';
import {NgbDatepickerModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import { CardBacksideComponent } from './card-backside/card-backside.component';
import { SelfieComponent } from './selfie/selfie.component';


@NgModule({
  declarations: [CardFrontsideComponent, CardBacksideComponent, SelfieComponent],
  imports: [
    CommonModule,
    KycRoutingModule,
    GymsModule,
    NgbDatepickerModule,
    SharedModule,
    NgbDropdownModule,
  ]
})
export class KycModule { }
