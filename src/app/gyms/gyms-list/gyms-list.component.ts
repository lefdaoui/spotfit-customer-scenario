import {Component, OnInit} from '@angular/core';
import {Gym} from '../../shared/models/gym';
import {GYMS} from '../../shared/data/gyms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gyms-list',
  templateUrl: './gyms-list.component.html',
  styleUrls: ['./gyms-list.component.scss']
})
export class GymsListComponent implements OnInit {
  gyms: Gym[] = GYMS;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  oncardClicked($event: number) {
    console.log({gymId: $event});

    this.router.navigateByUrl('/gyms/gym-details');
  }

}
