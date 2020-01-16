import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'topbar-s3',
  templateUrl: './topbar-s3.component.html',
  styleUrls: ['./topbar-s3.component.scss']
})
export class TopbarS3Component implements OnInit {
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

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

}
