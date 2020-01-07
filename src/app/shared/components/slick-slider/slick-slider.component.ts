import {AfterContentInit, Component, ElementRef, Input, OnInit} from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'slick-slider',
  templateUrl: './slick-slider.component.html',
  styleUrls: ['./slick-slider.component.scss']
})
export class SlickSliderComponent implements AfterContentInit {

  @Input() options: any;

  $element: any;

  defaultOptions: any = {};

  constructor(private el: ElementRef) { }


  ngAfterContentInit() {
    for (let key in this.options) {
      this.defaultOptions[key] = this.options[key];
    }

    this.$element = jQuery(this.el.nativeElement).slick(this.defaultOptions);
  }

}
