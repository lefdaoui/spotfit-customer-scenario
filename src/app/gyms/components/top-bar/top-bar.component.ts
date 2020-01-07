import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() onTabChanged = new EventEmitter<string>();
  @Input() activeTab = 'list';
  @Input() design = null;

  constructor() {
  }

  ngOnInit() {
  }

  onSelectTab(tab: string) {
    // change tabs behaviour
    this.activeTab = tab;
    // emit the event to parent components
    this.onTabChanged.emit(tab);
  }
}
