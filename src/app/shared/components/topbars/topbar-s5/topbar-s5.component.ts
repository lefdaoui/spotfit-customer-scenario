import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'topbar-s5',
  templateUrl: './topbar-s5.component.html',
  styleUrls: ['./topbar-s5.component.scss']
})
export class TopbarS5Component implements OnInit {
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
