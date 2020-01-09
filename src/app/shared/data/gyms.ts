import {Gym} from '../models/gym';

/*{ latitude: 33.61416799, longitude: -7.55374872}
{ latitude: 33.61253798, longitude: -7.59840514}*/

export let GYMS: Gym[] = [
  {
    id: 1,
    group: {name: 'city club'},
    logo: null,
    name: 'city club casablanca',
    rate: 4.7,
    qrcode: null,
    class: {id: 1, name: 'gold'},
    facilities: [{}, {}, {}, {}, {}, {}, {}, {},],
    activities: [{}, {}, {}],
    planning: [],
    subscriptions: [
      {name: 'DayPass', price: 19.99, duration: 1},
      {name: 'MonthPass', price: 299.99, duration: 30},
      {name: 'YearPass', price: 449.99, duration: 365},
    ],
    address: { latitude: 33.6085969, longitude: -7.6244165 }
  },
  {
    id: 2,
    group: {name: 'city club'},
    logo: null,
    name: 'city club casablanca',
    rate: 4.7,
    qrcode: null,
    class: {id: 1, name: 'platinum'},
    facilities: [{}, {}, {}, {}, {}, {}, {}, {},],
    activities: [{}, {}, {}],
    planning: [],
    subscriptions: [
      {name: 'DayPass', price: 19.99, duration: 1},
      {name: 'MonthPass', price: 299.99, duration: 30},
      {name: 'YearPass', price: 449.99, duration: 365},
    ],
    address: { latitude: 33.61416799, longitude: -7.55374872 }
  },
  {
    id: 3,
    group: {name: 'Patcha club'},
    logo: null,
    name: 'Patcha casablanca',
    rate: 3.7,
    qrcode: null,
    class: {id: 1, name: 'silver'},
    facilities: [{}, {}, {}, {}],
    activities: [{}, {}],
    planning: [],
    subscriptions: [
      {name: 'DayPass', price: 15.99, duration: 1},
      {name: 'MonthPass', price: 149.99, duration: 30},
      {name: 'YearPass', price: 369.99, duration: 365},
    ],
    address: { latitude: 33.60592533, longitude: -7.62283524},
  },
  {
    id: 4,
    group: {name: 'city club'},
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Y6fWd2hvool8o7NowbH6e0x-j7QjJtv-F5mJGSj08DqvhNgUBg&s',
    name: 'city club casablanca',
    rate: 4.7,
    qrcode: null,
    class: {id: 1, name: 'gold'},
    facilities: [{}, {}, {}, {}, {}, {}, {}, {},],
    activities: [{}, {}, {}],
    planning: [],
    subscriptions: [
      {name: 'DayPass', price: 19.99, duration: 1},
      {name: 'MonthPass', price: 299.99, duration: 30},
      {name: 'YearPass', price: 449.99, duration: 365},
    ],
    address: { latitude: 33.59574833, longitude: -7.59766488},
  },
]
