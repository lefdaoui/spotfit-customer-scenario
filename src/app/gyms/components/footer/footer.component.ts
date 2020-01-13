import {Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  // todo: remove this line later and fix bugs
  // encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  onSearch(mapOptionsForm: TemplateRef<any>) {
    this.open(mapOptionsForm);
  }

  open(mapOptionsForm) {
    this.modalService.open(mapOptionsForm, {windowClass: 'modal-phone'}).result.then((result) => {
      // todo: extract the options and emit them throught the service(observable)
    }, (reason) => { });
  }
}
