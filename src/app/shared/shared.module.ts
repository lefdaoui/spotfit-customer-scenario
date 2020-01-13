import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlickSliderComponent} from './components/slick-slider/slick-slider.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    SlickSliderComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule,
  ],
    exports: [
        SlickSliderComponent,
        RatingComponent,
    ]
})
export class SharedModule { }
