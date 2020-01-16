import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SessionsRoutingModule} from './sessions-routing.module';
import {SessionsPrecComponent} from './sessions-precedentes/sessions-prec.component';
import {SessionsComponent} from './sessions-actuelles/sessions.component';
import {SessionHComponent} from './sessions-Acceuil/session-h.component';
import {HeaderSesComponent} from './header-ses/header-ses.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [SessionsPrecComponent,
    SessionsComponent,
    SessionHComponent,
    HeaderSesComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    SharedModule,
  ],

})
export class SessionsModule {
}
