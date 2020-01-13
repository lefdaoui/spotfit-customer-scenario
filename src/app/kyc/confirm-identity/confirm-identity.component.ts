import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirm-identity',
  templateUrl: './confirm-identity.component.html',
  styleUrls: ['./confirm-identity.component.scss']
})
export class ConfirmIdentityComponent implements OnInit {
  @Input() title = null;
  @Output() onConfirmed: EventEmitter<any> = new EventEmitter();
  @Output() onCanceled: EventEmitter<any> = new EventEmitter();
  @Output() onNavigateTo: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.onNavigateTo.emit(path);
  }

  onCancel() {
    this.onCanceled.emit();
  }

  onConfirm() {
    this.onConfirmed.emit();
  }
}
