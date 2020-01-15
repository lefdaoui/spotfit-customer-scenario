import {Injectable} from '@angular/core';
import {OPTIONS} from '../data/options';

export interface Option {
  key?: string;
  value?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  predefined: Option[] = OPTIONS;

  constructor() {
  }

  getFullAccessPrice = (category: string) => {
    return this.getOption('full_access_price')[`${category}`];
  };

  getOption(key: string) {
    return this.predefined.find(option => option.key === key).value;
  }
}
