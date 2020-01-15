import {Customer} from './customer';

export interface CreditCard {
  id?: string;
  customer?: Customer;
  created_at?: string;
  number?: string;
  expire_at?: string;
  cvv?: string;
  default?: number;
}
