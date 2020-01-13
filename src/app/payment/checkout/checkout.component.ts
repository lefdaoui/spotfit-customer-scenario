import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmIdentityComponent} from '../../kyc/confirm-identity/confirm-identity.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  modalRef: NgbModalRef;
  constructor(private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {
  }

  confirmIdentity() {
    this.modalRef = this.modalService.open(ConfirmIdentityComponent, {windowClass: 'modal-phone'});
    this.modalRef.componentInstance.title = 'Confirm Identity';
    this.modalRef.result.then((result) => {
      console.log("modal closed");
    }, (reason) => {
      console.log("modal dismissed");
    });

    this.modalRef.componentInstance.onConfirmed.subscribe(() => {
      console.log('onConfirmed');

      this.modalRef.dismiss();
    });

    this.modalRef.componentInstance.onCanceled.subscribe(() => {
      console.log('onCanceled');

      this.modalRef.close();
    });

    this.modalRef.componentInstance.onNavigateTo.subscribe((path) => {
      console.log(`navigate to ${path}`);
      this.router.navigateByUrl(path);
      this.modalRef.dismiss();
    });
  }
}
