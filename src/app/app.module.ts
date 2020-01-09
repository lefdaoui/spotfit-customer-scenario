import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {GymsModule} from './gyms/gyms.module';
import {IndexComponent} from './index/index.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RequestGymsComponent } from './request-gyms/request-gyms.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { CongratulationComponent } from './congratulation/congratulation.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionHComponent } from './session-h/session-h.component';
import { SessionsPrecComponent } from './sessions-prec/sessions-prec.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AppComponent,
    SignInComponent,
    SignUpComponent,
    RequestGymsComponent,
    CongratulationComponent,
    SessionsComponent,
    SessionHComponent,
    SessionsPrecComponent,
    ReferFriendComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot([
      // Badr Mamatahir
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'index'
      },
      {
        path: 'subscriptions',
        loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsModule),
      },
      {
        path: 'gyms',
        loadChildren: () => import('./gyms/gyms.module').then(m => m.GymsModule),
      },
      {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule),
      },
      {
        path: 'kyc',
        loadChildren: () => import('./kyc/kyc.module').then(m => m.KycModule),
      },
      {
        path: 'index',
        component: IndexComponent
      },
      // Mehdi Zouihar
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'request-gyms',
        component: RequestGymsComponent,
      },
      {
        path: 'refer-friends',
        component: ReferFriendComponent,
      },
      // Azzedine Ghattas
      {
        path: 'session-h',
        component: SessionHComponent,
      },
      {
        path: 'sessions',
        component: SessionsComponent,
      },
      {
        path: 'sessions-prec',
        component: SessionsPrecComponent,
      },
      {
        path: 'congratulation',
        component: CongratulationComponent,
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
