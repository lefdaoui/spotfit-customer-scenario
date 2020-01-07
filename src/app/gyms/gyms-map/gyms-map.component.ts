import { Component, OnInit } from '@angular/core';
import {Gym} from '../../shared/models/gym';
import {GYMS} from '../../shared/data/gyms';
import {Router} from '@angular/router';
import {AngularGoogleMapsComponent} from './angular-google-maps/angular-google-maps.component';

@Component({
  selector: 'app-gyms-map',
  templateUrl: './gyms-map.component.html',
  styleUrls: ['./gyms-map.component.scss'],
  entryComponents: [AngularGoogleMapsComponent]
})
export class GymsMapComponent implements OnInit {
  gyms: Gym[] = GYMS;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  oncardClicked($event: number) {
    console.log({gymId: $event});

    this.router.navigateByUrl('/gyms/gym-details');
  }
}
