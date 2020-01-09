import { Component, OnInit } from '@angular/core';
import {Gym} from '../../shared/models/gym';
import {GYMS} from '../../shared/data/gyms';
import {Router} from '@angular/router';
import {GymService} from '../gym.service';

@Component({
  selector: 'app-gyms-map',
  templateUrl: './gyms-map.component.html',
  styleUrls: ['./gyms-map.component.scss']
})
export class GymsMapComponent implements OnInit {
  gyms: Gym[] = GYMS;
  onGymSelected$ = this.gymService.onGymSelected$;
  constructor(
    private router: Router,
    private gymService: GymService,
  ) { }

  showInfoWindow = false;

  ngOnInit() {
    this.onGymSelected$.subscribe(gym => {
      this.showInfoWindow = true;
    });
  }

  oncardClicked($event: number) {
    console.log({gymId: $event});

    this.router.navigateByUrl('/gyms/gym-details');
  }

  onHideInfoWindow() {
    this.showInfoWindow = false;
  }
}
