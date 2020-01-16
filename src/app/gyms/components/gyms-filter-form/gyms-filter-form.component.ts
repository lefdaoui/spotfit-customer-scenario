import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {GymService} from '../../gym.service';
import {NgSelectConfig} from '@ng-select/ng-select';
import {FiltersOptionsService} from './filters-options.service';
import {ActivityService} from '../../../shared/services/activitie.service';
import {map} from 'rxjs/operators';
import {Activity} from '../../../shared/models/activity';
import {CITIES} from '../../../shared/data/cities';
import {GymOrderBy} from '../../../shared/enums/enums';

@Component({
  selector: 'app-gyms-filter-form',
  templateUrl: './gyms-filter-form.component.html',
  styleUrls: ['./gyms-filter-form.component.scss']
})
export class GymsFilterFormComponent implements OnInit {

  mergedStream$: Observable<any> = combineLatest(
    this.gymService.onGymsChanged$,
    this.activityService.onActivitiesChanged$,
  ).pipe(
    map((stream: any[]) => {
      const data = [];
      stream.forEach(el => data.push(...el));
      return data;
    })
  );

  cities = CITIES;
  orderBy = [
    {
      value: GymOrderBy.DISTANCE,
      label: 'Accès à la salle',
    },
  ]

  selectedActivites: Activity[] = [];
  selectedGyms: Activity[] = [];
  selectedCity = 'casablanca';
  selectedDistance = '1';
  selectedOrders: number[] = [];


  constructor(
    private gymService: GymService,
    private activityService: ActivityService,
    private config: NgSelectConfig,
    private filtersOptions: FiltersOptionsService
  ) {
    this.config.notFoundText = 'Pas trouvé';
  }

  ngOnInit() {
    this.mergedStream$.subscribe(data => console.log(data));
  }

  reset() {

  }

  onSelectFilterOption(data: any[]) {
    this.selectedGyms = [];
    this.selectedActivites = [];

    data.forEach(object => {
      if (this.isGym(object)) {
        this.selectedGyms.push(object);
      } else {
        this.selectedActivites.push(object);
      }
    });
  }

  isGym(object) {
    return object.class !== undefined;
  }

  groupBy(object) {
    return object.class === undefined ? 'Activites' : 'Salles de sport';
  }

  onSelectCity(city: string) {
    this.selectedCity = city;
  }

  incremtnDitance() {
    if (parseFloat(this.selectedDistance) <= 100 && parseFloat(this.selectedDistance) >= 0) {
      this.selectedDistance = (parseFloat(this.selectedDistance) + 1) + '';
    }
  }

  decremtnDitance() {
    if (parseFloat(this.selectedDistance) <= 100 && parseFloat(this.selectedDistance) > 0) {
      this.selectedDistance = (parseFloat(this.selectedDistance) - 1) + '';
    }
  }

  orderGymsBy($event) {
    this.selectedOrders.push($event.value);
  }
}
