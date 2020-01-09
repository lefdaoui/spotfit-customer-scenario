import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-backside',
  templateUrl: './card-backside.component.html',
  styleUrls: ['./card-backside.component.scss']
})
export class CardBacksideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openCamera() {
    // todo: open the device camera (back)
  }
}
