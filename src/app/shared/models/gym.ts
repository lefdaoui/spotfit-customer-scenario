import {Group} from './group';
import {Class} from './class';
import {Facility} from './facility';
import {Planning} from './planning';
import {Activity} from './activity';
import {Subscription} from './subscription';
import {Address} from './address';

export interface Gym {
  id?: number;
  group?: Group;
  logo?: string;
  name?: string;
  rate?: number;
  qrcode?: string;
  class?: Class;
  facilities?: Facility[];
  planning?: Planning[];
  subscriptions?: Subscription[];
  activities?: Activity[];
  address: Address;
}
