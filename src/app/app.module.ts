import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/shared.module';
import {TabsModule} from 'ngx-bootstrap';
import { GymDetialsComponent } from './gym-detials/gym-detials.component';
import { GymsListComponent } from './gyms-list/gyms-list.component';
import { SubsciptionStatusComponent } from './subsciption-status/subsciption-status.component';
import { PartnerHomeComponent } from './partner-home/partner-home.component';

import { CongratulationComponent } from './congratulation/congratulation.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionHComponent } from './session-h/session-h.component';
import { SessionsPrecComponent } from './sessions-prec/sessions-prec.component';
@NgModule({
  declarations: [
    AppComponent,
    GymDetialsComponent,
    GymsListComponent,
    SubsciptionStatusComponent,
    PartnerHomeComponent,
     CongratulationComponent,
    SessionsComponent,
    SessionHComponent,
    SessionsPrecComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
