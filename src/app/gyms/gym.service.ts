import { Injectable } from '@angular/core';
import {Gym} from '../shared/models/gym';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {GYMS} from '../shared/data/gyms';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {MarkerService} from './marker.service';
import {Marker} from '../shared/models/marker';

@Injectable({
  providedIn: 'root'
})
export class GymService {
  private gyms: BehaviorSubject<Gym[]> = new BehaviorSubject(GYMS as Gym[]);
  readonly onGymsChanged$: Observable<Gym[]> = this.gyms.asObservable();

  private onSelectGym: Subject<Gym> = new Subject<Gym>();
  readonly onGymSelected$: Observable<Gym> = this.onSelectGym.asObservable().pipe();

  public readonly onGymsMarkersChanged: Observable<Marker[]> = this.gyms.pipe(
    map(gyms => {
      return gyms.map(gym => {
        return {
          gym_id: gym.id, address: gym.address, icon: this.markerService.getMarkerIcon(gym.class.name)
        };
      });
    })
  );

  constructor(
    private markerService: MarkerService
  ) {

  }

  getGyms() {
    return this.gyms.getValue();
  }

  selectedGym(gym: Gym) {
    this.onSelectGym.next(gym);
  }

  getGymById(id: number): Gym {
    return this.getGyms().filter(gym => gym.id === id)[0];
  }
}
