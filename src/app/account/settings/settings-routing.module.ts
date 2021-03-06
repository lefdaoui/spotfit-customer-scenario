import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditProfileComponent} from './edit-profile/edit-profile.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'edit-profile',
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
