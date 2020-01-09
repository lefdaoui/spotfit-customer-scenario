import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-credit-card-item',
  templateUrl: './credit-card-item.component.html',
  styleUrls: ['./credit-card-item.component.scss']
})
export class CreditCardItemComponent implements OnInit {

  @Output() onClicked = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onSelectCard() {
    this.onClicked.emit(Math.floor(Math.random() * 10));
  }
}
