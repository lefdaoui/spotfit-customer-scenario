import {Subscription} from './subscription';

export interface Session {
  id?: string;
  subscription?: Subscription;
  from?: string; // the moment when the customer's grcode scanned by receptionist
}
