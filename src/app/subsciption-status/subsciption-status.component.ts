import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-subsciption-status',
  templateUrl: './subsciption-status.component.html',
  styleUrls: ['./subsciption-status.component.scss']
})
export class SubsciptionStatusComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  back = () => {
    this.location.back();
  }
}
