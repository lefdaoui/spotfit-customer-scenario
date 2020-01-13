import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {GymsModule} from '../../gyms/gyms.module';
import {TabsModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    GymsModule,
    TabsModule
  ]
})
export class SettingsModule { }
