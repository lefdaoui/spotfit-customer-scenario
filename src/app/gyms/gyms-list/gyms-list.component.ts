import {Component, OnInit} from '@angular/core';
import {Gym} from '../shared/models/gym';
import {GYMS} from '../shared/data/gyms';

@Component({
  selector: 'app-gyms-list',
  templateUrl: './gyms-list.component.html',
  styleUrls: ['./gyms-list.component.scss']
})
export class GymsListComponent implements OnInit {
  gyms: Gym[] = GYMS;

  constructor() {
  }

  ngOnInit() {
  }

}
