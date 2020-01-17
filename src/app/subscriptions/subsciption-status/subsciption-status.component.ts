import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {ThemeServiceService} from '../../shared/services/theme-service.service';

@Component({
  selector: 'app-subsciption-status',
  templateUrl: './subsciption-status.component.html',
  styleUrls: ['./subsciption-status.component.scss']
})
export class SubsciptionStatusComponent implements OnInit {
  darkMode$: Observable<boolean>;

  constructor(
    private location: Location,
    private themeService: ThemeServiceService,
  ) {
    this.darkMode$ = this.themeService.darkMode$;
  }

  ngOnInit() {
  }

  back = () => {
    this.location.back();
  };

  onChangeTheme() {
    const enableDarkMode = this.themeService.activeMode() === 'default' ? true : false;
    this.themeService.setDarkMode(enableDarkMode);
  }
}
