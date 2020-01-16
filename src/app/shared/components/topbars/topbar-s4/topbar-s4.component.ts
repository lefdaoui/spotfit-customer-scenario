import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'topbar-s4',
  templateUrl: './topbar-s4.component.html',
  styleUrls: ['./topbar-s4.component.scss']
})
export class TopbarS4Component implements OnInit {
  @Input() extraClasses = [];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }


  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
