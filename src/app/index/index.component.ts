import {Component, OnInit} from '@angular/core';
import {ThemeServiceService} from '../shared/services/theme-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  darkMode$: Observable<boolean>;
  activeMode: 'dark' | 'default';

  constructor(
    private themeService: ThemeServiceService
  ) {
  }

  ngOnInit() {
    this.darkMode$ = this.themeService.darkMode$;

    this.themeService.darkMode$.subscribe(isDarkMode => console.log({isDarkMode}));
    this.themeService.theme$.subscribe(theme => console.log({theme}));

    this.activeMode = this.themeService.activeMode();
  }

  onChangeTheme() {
    const enableDarkMode = this.themeService.activeMode() === 'default' ? true : false;
    this.themeService.setDarkMode(enableDarkMode);
  }
}
