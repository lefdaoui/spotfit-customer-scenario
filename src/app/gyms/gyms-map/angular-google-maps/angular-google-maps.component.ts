import {Component, ElementRef, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {FormControl} from '@angular/forms';
import {Gym} from '../../../shared/models/gym';
import {Address} from '../../../shared/models/address';
// @ts-ignore
import {} from '@types/googlemaps';
import {GYMS} from '../../../shared/data/gyms';
import {GymService} from '../../gym.service';
import {MarkerService} from '../../marker.service';
import {Marker} from '../../../shared/models/marker';

@Component({
  selector: 'app-angular-google-maps',
  templateUrl: './angular-google-maps.component.html',
  styleUrls: ['./angular-google-maps.component.scss']
})
export class AngularGoogleMapsComponent implements OnInit {
  // data comming from parent component
  gyms: Gym[] = GYMS;
  markers: { gym_id: number, address: Address, icon: string }[];

  // map focus on these geometry attributes when bootstrapping default morocco
  focusOn = {
    latitude: 31.7917023,
    longitude: -7.0926199,
    zoom: 6,
  };


  gpsEnabled = false;
  // filters
  /*filters = [
    { label: 'gym', label_fr: "gyms", class: 'gradient-pomegranate', icon: "ft-crosshair" },
    { label: 'activity', label_fr: "activités", class: ' gradient-purple-bliss', icon: "ft-activity" },
    { label: 'coach', label_fr: "entraîneurs", class: 'gradient-mint', icon: "ft-check-circle" },
    { label: 'stars', label_fr: "gamme", class: ' gradient-ibiza-sunset', icon: "ft-star" },
    { label: 'location', label_fr: "localisation", class: 'gradient-nepal whit', icon: "ft-flag" },
  ];*/

  // selectedFilter = 'gym';

  // markerDraggable = true;
  // locationChosen = false;

  searchControl: FormControl;
  visitor: { lat: number, lng: number };

  @ViewChild('search', {static: true}) public searchElement: ElementRef = null;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private gymService: GymService,
    private markerService: MarkerService
  ) {
    this.searchControl = new FormControl();
    // put gyms markers on map
    gymService.onGymsMarkersChanged.subscribe(markers => this.markers = markers);

    // todo: focus on position the most closer to user when exist
    /*if(this.markers.length > 0) {
      this.focusOn = {
        latitude: this.markers[0].address.latitude,
        longitude: this.markers[0].address.longitude,
        zoom: 14,
      }
    }*/
  }

  ngOnInit() {
    /*this.mapsAPILoader.load().then(
      () => {
        const autocomplete = new google.maps.places.Autocomplete(
          this.searchElement.nativeElement,
          {types: [], componentRestrictions: {country: 'MA'}});

        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

            const location = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };

            // set positon on the map
            this.setPosition(location.lat, location.lng);

            // set position's markers
            this.markers.push(location);

            // empty the search input
            this.searchControl.reset();

          });
        });
      }
    );*/
  }

  // private setCurrentLocationOnMap() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition( position => {
  //       this.visitor = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       }
  //       this.setPosition(this.visitor.lat, this.visitor.lng);
  //       this.zoom = 14;
  //     })
  //   }
  // }

  // onChooseLocation(event) {
  //   this.lat = event.coords.lat;
  //   this.lng = event.coords.lng;
  //   this.locationChosen = true;
  // }

  private setPosition(latitude: number, longitude: number, zoom: number) {
    this.focusOn = {
      latitude,
      longitude,
      zoom,
    };
  }


  onSelectGym(gymId: number) {
    // todo: zoom in marker (level 14)
    const gym = this.gymService.getGymById(gymId);
    const marker: Marker = this.markerService.getMarker(gym);
    this.setPosition(marker.address.latitude, marker.address.longitude, this.markerService.markerZoom);

    // todo: fire the event and tell other part of application
    this.gymService.selectedGym(gym);
  }

  // onChooseFilter(filter: string) {
  //   if(filter === 'location') {
  //     this.setCurrentLocationOnMap();
  //     this.selectedFilter = 'location';
  //   } else {
  //     // reset markers
  //     this.markers = this.gyms;
  //     this.selectedFilter = this.filters.find(f => f.label === filter).label;
  //   }
  // }

  // onSelectActivity(activities: {id: number, name: string}[]) {
  //   // we have an array of activities
  //   // we should filter gyms based on passed activities
  //
  //   let ids = [];
  //   activities.forEach(activity => {
  //     ids.push(activity.id);
  //   })
  //
  //   this.markers = this.gyms.filter(gym => ids.includes(gym.activity_id));
  // }

  // onSelectCoach(coaches: {id: number, fullname: string}[]) {
  //   let ids = [];
  //   coaches.forEach(activity => {
  //     ids.push(activity.id);
  //   })
  //
  //   this.markers = this.gyms.filter(gym => ids.includes(gym.coach_id));
  // }

  // onRateChange(rate)  {
  //   this.markers = this.gyms.filter(gym => gym.stars == rate);
  // }
  //
  // reset() {
  //   this.markers = this.gyms;
  // }

  /*onSelectStars(stars: number) {
    this.markers = this.gyms.filter(gym => gym.stars == stars);
  }*/

  // onSelectGym(gyms: {}[]) {
  //   this.markers = gyms;
  // }
}
