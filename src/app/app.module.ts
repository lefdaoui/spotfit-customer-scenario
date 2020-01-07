import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {SubsciptionStatusComponent} from './subsciption-status/subsciption-status.component';
import {GymsModule} from './gyms/gyms.module';
import { TypoComponent } from './typo/typo.component';

@NgModule({
  declarations: [
    AppComponent,
    SubsciptionStatusComponent,
    TypoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'typo',
        component: TypoComponent,
      },
      {
        path: 'subscription-status',
        component: SubsciptionStatusComponent,
      },
      {
        path: 'gyms',
        loadChildren: () => import('./gyms/gyms.module').then(m => m.GymsModule),
      },
      {
        path: '',
        loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule),
      },
    ]),
    SharedModule,
    GymsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
