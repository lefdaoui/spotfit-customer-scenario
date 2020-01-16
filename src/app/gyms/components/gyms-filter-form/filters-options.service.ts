import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {GymsFilter} from '../../../shared/models/gyms-filter';
import {GymService} from '../../gym.service';

@Injectable({
  providedIn: 'root'
})
export class FiltersOptionsService {
  private filterOptions: BehaviorSubject<GymsFilter> = new BehaviorSubject<GymsFilter>({});
  readonly onFilterOptionsChanged$: Observable<GymsFilter> = this.filterOptions.asObservable();

  constructor(gymService: GymService) {

  }

  getFilterOptions() {
    return this.filterOptions.getValue();
  }

  setFilterOptions(filterOption: GymsFilter) {
    return this.filterOptions.next(filterOption);
  }
}
