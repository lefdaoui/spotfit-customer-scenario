import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardFrontsideComponent} from './card-frontside/card-frontside.component';
import {CardBacksideComponent} from './card-backside/card-backside.component';
import {SelfieComponent} from './selfie/selfie.component';


const routes: Routes = [
  {
    path: 'card-frontside',
    component: CardFrontsideComponent
  },
  {
    path: 'card-backside',
    component: CardBacksideComponent
  },
  {
    path: 'selfie',
    component: SelfieComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KycRoutingModule { }
