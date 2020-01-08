import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/shared.module';
import {TabsModule} from 'ngx-bootstrap';
import { GymDetialsComponent } from './gym-detials/gym-detials.component';
import { GymsListComponent } from './gyms-list/gyms-list.component';
import { SubsciptionStatusComponent } from './subsciption-status/subsciption-status.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RequestGymsComponent } from './request-gyms/request-gyms.component';
import { TestComponent } from './test/test.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    GymDetialsComponent,
    GymsListComponent,
    SubsciptionStatusComponent,
    SignInComponent,
    SignUpComponent,
    RequestGymsComponent,
    TestComponent,
    ReferFriendComponent
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
