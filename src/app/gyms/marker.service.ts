import { Injectable } from '@angular/core';
import {Gym} from '../shared/models/gym';
import {Marker} from '../shared/models/marker';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  markerZoom = 14;
  constructor() { }

  getMarkerIcon(plan: 'gold' | 'platinum' | 'silver') {
    return `assets/svg/markers/${plan}.svg`;
  }

  getMarker(gym: Gym): Marker {
    return {gym_id: gym.id, address: gym.address, icon: this.getMarkerIcon(gym.class.name)};
  }
}
