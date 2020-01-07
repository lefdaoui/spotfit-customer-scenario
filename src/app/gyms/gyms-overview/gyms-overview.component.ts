import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gyms-overview',
  templateUrl: './gyms-overview.component.html',
  styleUrls: ['./gyms-overview.component.scss']
})
export class GymsOverviewComponent implements OnInit {
  activeTab = 'list';

  constructor() { }

  ngOnInit() {
  }

  onTabChanged($event: string) {
    this.activeTab = $event;
  }

}
