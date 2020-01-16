import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlickSliderComponent} from './components/slick-slider/slick-slider.component';
import { RatingComponent } from './components/rating/rating.component';
import { TopbarS1Component } from './components/topbars/topbar-s1/topbar-s1.component';
import { TopbarS2Component } from './components/topbars/topbar-s2/topbar-s2.component';
import { TopbarS3Component } from './components/topbars/topbar-s3/topbar-s3.component';
import { TopbarS4Component } from './components/topbars/topbar-s4/topbar-s4.component';
import { TopbarS5Component } from './components/topbars/topbar-s5/topbar-s5.component';

@NgModule({
  declarations: [
    SlickSliderComponent,
    RatingComponent,
    TopbarS1Component,
    TopbarS2Component,
    TopbarS3Component,
    TopbarS4Component,
    TopbarS5Component,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SlickSliderComponent,
    RatingComponent,
    TopbarS1Component,
    TopbarS2Component,
    TopbarS3Component,
    TopbarS4Component,
    TopbarS5Component,
  ]
})
export class SharedModule { }
