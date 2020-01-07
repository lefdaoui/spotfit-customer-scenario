import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GymDetialsComponent} from './gym-detials/gym-detials.component';
import {GymsListComponent} from './gyms-list/gyms-list.component';
import {GymsMapComponent} from './gyms-map/gyms-map.component';
import {GymsOverviewComponent} from './gyms-overview/gyms-overview.component';


const routes: Routes = [
  {
    path: 'gym-details',
    component: GymDetialsComponent,
  },
  {
    path: 'gyms-list',
    component: GymsListComponent,
  },
  {
    path: 'gyms-map',
    component: GymsMapComponent,
  },
  {
    path: 'gyms-overview',
    component: GymsOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymsRoutingModule { }
