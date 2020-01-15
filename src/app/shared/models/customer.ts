import {Address} from './address';
import {Account} from './account';

export interface Customer {
  id?: number;
  avatar?: string;
  birthDay?: string;
  firstName?: string;
  gender?: string;
  jobTitle?: string;
  lastName?: string;
  phoneNumber?: string;
  cinfront?: string;
  cinback?: string;
  address?: Address;
  account?: Account;
  ambassador?: number;
}
