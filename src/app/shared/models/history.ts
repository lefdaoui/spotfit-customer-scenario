import {Subscription} from './subscription';
import {Session} from './session';

export interface History {
  subscription?: Subscription;
  sessions?: Session[];
}
