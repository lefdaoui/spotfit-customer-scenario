import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.scss']
})
export class SelfieComponent implements OnInit {

  selfieTaken = false;
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }


  openCamera() {
    // todo: open the device camera (front)
  }

  next(methodOptionsModal) {
    if(!this.selfieTaken) {
      this.onTakeSelfie(methodOptionsModal);
      return false;
    }
  }

  onTakeSelfie(methodOptionsModal) {
    this.modalService.open(methodOptionsModal, {windowClass: 'modal-phone'}).result.then((result) => {
      // todo: implement this callback to retrieve photo
    }, (reason) => { });
  }

  explorGallery() {
    // todo: display gallery explorer
  }
}
