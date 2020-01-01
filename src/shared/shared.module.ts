import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlickSliderComponent} from './slick-slider/slick-slider.component';



@NgModule({
  declarations: [
    SlickSliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SlickSliderComponent
  ]
})
export class SharedModule { }
