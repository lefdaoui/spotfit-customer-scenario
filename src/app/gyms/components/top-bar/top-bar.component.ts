import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() onTabChanged = new EventEmitter<string>();
  @Input() activeTab = 'list';
  @Input() design = null;
  @Input() navigateBackUrl;

  constructor(
    private location: Location,
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

  goBack() {
   if(!this.navigateBackUrl) {
     this.location.back();
   }

   this.router.navigateByUrl(this.navigateBackUrl);
  }
}
