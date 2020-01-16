import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'topbar-s1',
  templateUrl: './topbar-s1.component.html',
  styleUrls: ['./topbar-s1.component.scss']
})
export class TopbarS1Component implements OnInit {
  @Output() onTabChanged = new EventEmitter<string>();
  @Input() activeTab = 'list';
  @Input() extraClasses = [];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSelectTab(tab: string) {
    // change tabs behaviour
    this.activeTab = tab;
    // emit the event to parent components
    this.onTabChanged.emit(tab);
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
