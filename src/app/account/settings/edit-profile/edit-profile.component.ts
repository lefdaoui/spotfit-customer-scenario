import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveChanges() {
    // todo: update customer profile information
  }

  openExplorer() {
    // todo: open the gallery and receive selected photo
  }
}
