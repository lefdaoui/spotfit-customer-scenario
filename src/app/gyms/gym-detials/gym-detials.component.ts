import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-gym-detials',
  templateUrl: './gym-detials.component.html',
  styleUrls: ['./gym-detials.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GymDetialsComponent implements OnInit {

  images = [
    'https://source.unsplash.com/user/erondu/1600x900',
    'https://source.unsplash.com/user/erondu/1600x901',
    'https://source.unsplash.com/user/erondu/1600x899',
  ];

  constructor() { }

  ngOnInit() {
  }

}
