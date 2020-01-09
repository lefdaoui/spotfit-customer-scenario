import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss']
})
export class CreditCardsComponent implements OnInit {
  newCard = false;
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(

  ) {
  }

  onAddCard() {
    this.newCard = !this.newCard;
  }

  onCancelForm() {
    this.newCard = !this.newCard;
  }

  onAttachCard() {
    // todo: attach source to customer
    this.onCancelForm();
  }

  editCard(cardId: number, editForm) {
    this.modalService.open(editForm, { windowClass: 'modal-phone' }).result.then((result) => {
      // todo: receive the last modified data and update the entity (post request to api)

    }, (dismiss) => console.log({cardId}));
  }
}
