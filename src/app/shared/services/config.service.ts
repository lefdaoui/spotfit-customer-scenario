import {Injectable} from '@angular/core';

interface Option {
  key?: string;
  value?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  predefined: Option[] = [
    {
      key: 'full_access_price', value: {
        silver: 249.99,
        gold: 389.99,
        platinum: 1199.99,
      },
    },
  ];

  constructor() {
  }

  getFullAccessPrice = (category: string) => {
    return this.getOption('full_access_price')[`${category}`];
  };

  getOption(key: string) {
    return this.predefined.find(option => option.key === key).value;
  }
}
