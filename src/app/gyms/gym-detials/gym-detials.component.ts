import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gym-detials',
  templateUrl: './gym-detials.component.html',
  styleUrls: ['./gym-detials.component.scss'],
})
export class GymDetialsComponent implements OnInit {

  images = [
    'assets/img/t3.jfif',
    'assets/img/t2.jfif',
    'assets/img/t1.jfif',
  ];

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  onApply() {
    this.router.navigateByUrl('/payment/checkout');
  }
}
