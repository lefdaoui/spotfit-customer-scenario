import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {TabsModule} from 'ngx-bootstrap';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    TabsModule,
    SharedModule,
  ]
})
export class SettingsModule { }
