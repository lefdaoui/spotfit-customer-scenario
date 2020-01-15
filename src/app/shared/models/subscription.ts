import { Gym } from './gym';
import {SubscriptionStatus, SubscriptionType} from '../enums/enums';

export interface Subscription {
  id?: number;
  price?: number;
  status?: SubscriptionStatus;
  subscription_type?: SubscriptionType;
  remaining_time?: string;
  start_at?: Date;
  end_at?: Date;
  gym: Gym;
}
