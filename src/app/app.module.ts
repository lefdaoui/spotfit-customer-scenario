import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {GymsModule} from './gyms/gyms.module';
import {TestComponent} from './test/test.component';
import {IndexComponent} from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot([
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
        path: 'test',
        component: TestComponent
      },
      {
        path: 'index',
        component: IndexComponent
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
