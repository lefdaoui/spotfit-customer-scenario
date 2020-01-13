import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-gym',
  templateUrl: './favorite-gym.component.html',
  styleUrls: ['./favorite-gym.component.scss']
})
export class FavoriteGymComponent implements OnInit {

  sup:Boolean;
  constructor() {

   }

  ngOnInit() {
  }

  suprimersalle(){
    this.sup =! this.sup;
  }

}
