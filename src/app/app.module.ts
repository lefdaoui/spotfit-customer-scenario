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
import { TestComponent } from './test/test.component';

import { CheckInComponent } from './check-in/check-in.component';
import { FavoriteGymComponent } from './favorite-gym/favorite-gym.component';
import { SessionsModule } from './Sessions/sessions.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AppComponent,
    SignInComponent,
    SignUpComponent,
    RequestGymsComponent,
    CheckInComponent,
    FavoriteGymComponent,
    CongratulationComponent,    
    ReferFriendComponent,
    TestComponent,
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
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('./account/settings/settings.module').then(m => m.SettingsModule),
      },
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'test',
        component: TestComponent,
        data: { animation: 'toLeft' }
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
        path: 'sessions',
        loadChildren: () => import('./Sessions/sessions.module').then(m => m.SessionsModule),
      },
      {
        path: 'congratulation',
        component: CongratulationComponent,
      },
      {
        path: 'check-in',
        component: CheckInComponent,
      },
      {
        path: 'favorite-gym',
        component: FavoriteGymComponent,
      },
    ]),
    SharedModule,
    GymsModule,
    SessionsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
