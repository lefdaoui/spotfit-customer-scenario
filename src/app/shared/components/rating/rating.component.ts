import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() stars: number = 1;
  @Input() size: 'sm'|'md'|'lg' = 'md';

  constructor() { }

  ngOnInit() {
  }

}
