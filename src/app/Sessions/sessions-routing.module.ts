import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionsPrecComponent } from './sessions-precedentes/sessions-prec.component';
import { SessionsComponent } from './sessions-actuelles/sessions.component';
import { SessionHComponent } from './sessions-Acceuil/session-h.component';



const routes: Routes = [
  {
    path: '',
    component: SessionHComponent ,
  },
  {
    path: 'actuelles',
    component: SessionsComponent,
  },
  {
    path: 'precedentes',
    component: SessionsPrecComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
