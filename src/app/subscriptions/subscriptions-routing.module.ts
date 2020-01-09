import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubsciptionStatusComponent} from './subsciption-status/subsciption-status.component';


const routes: Routes = [
  {
    path: 'status',
    component: SubsciptionStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule { }
