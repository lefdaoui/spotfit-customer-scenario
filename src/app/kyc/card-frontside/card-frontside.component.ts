import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-frontside',
  templateUrl: './card-frontside.component.html',
  styleUrls: ['./card-frontside.component.scss']
})
export class CardFrontsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openCamera() {
    // todo: open the device camera (back)
  }
}
