import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/shared.module';
import {TabsModule} from 'ngx-bootstrap';
import { GymDetialsComponent } from './gym-detials/gym-detials.component';
import { GymsListComponent } from './gyms-list/gyms-list.component';
import { SubsciptionStatusComponent } from './subsciption-status/subsciption-status.component';

@NgModule({
  declarations: [
    AppComponent,
    GymDetialsComponent,
    GymsListComponent,
    SubsciptionStatusComponent,
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
