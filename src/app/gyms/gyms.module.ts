import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {GymsRoutingModule} from './gyms-routing.module';
import {GymDetialsComponent} from './gym-detials/gym-detials.component';
import {GymsListComponent} from './gyms-list/gyms-list.component';
import {GymsMapComponent} from './gyms-map/gyms-map.component';
import {GymCardComponent} from './components/gym-card/gym-card.component';
import {FooterComponent} from './components/footer/footer.component';
import {SharedModule} from '../shared/shared.module';
import {TabsModule} from 'ngx-bootstrap';
import {AngularGoogleMapsComponent} from './gyms-map/angular-google-maps/angular-google-maps.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GymsOverviewComponent} from './gyms-overview/gyms-overview.component';
import {GymsFilterFormComponent} from './components/gyms-filter-form/gyms-filter-form.component';

@NgModule({
  declarations: [
    GymDetialsComponent,
    GymsListComponent,
    GymsMapComponent,
    GymCardComponent,
    FooterComponent,
    AngularGoogleMapsComponent,
    GymsOverviewComponent,
    GymsFilterFormComponent,
  ],
  imports: [
    CommonModule,
    GymsRoutingModule,
    SharedModule,
    TabsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXuzcjaZ17frGIg9ZVR6ar9HexIHvBsPY',
      libraries: ['places'],
    }),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
    GymCardComponent,
    FooterComponent,
  ]
})
export class GymsModule {
}
