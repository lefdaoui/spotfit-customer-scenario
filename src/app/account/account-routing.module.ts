import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {NotificationsListComponent} from './notifications-list/notifications-list.component';
import {ProfileComponent} from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview'
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: 'notifications',
    component: NotificationsListComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
