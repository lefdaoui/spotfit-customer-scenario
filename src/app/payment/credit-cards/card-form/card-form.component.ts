import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  @Output() onCancel = new EventEmitter();
  @Output() onAddCard = new EventEmitter<any>();
  @Output() onEditCard = new EventEmitter<any>();
  @Input() card = {};
  @Input() action = 'add';
  constructor() { }

  ngOnInit() {
  }

  onCanceled = () => {
    this.onCancel.emit();

  }

  onCardAdded = () => {
    this.onAddCard.emit({});
  }

  onCardEdited() {
    this.onEditCard.emit(this.card);
  }
}
