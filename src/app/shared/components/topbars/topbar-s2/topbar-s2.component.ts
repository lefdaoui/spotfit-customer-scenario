import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'topbar-s2',
  templateUrl: './topbar-s2.component.html',
  styleUrls: ['./topbar-s2.component.scss']
})
export class TopbarS2Component implements OnInit {
  @Input() navigateBackUrl;
  @Input() extraClasses = [];

  constructor(
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit() {
  }


  goBack() {
    if (!this.navigateBackUrl) {
      this.location.back();
    }

    this.router.navigateByUrl(this.navigateBackUrl);
  }
}
