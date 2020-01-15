import {NotificationType} from '../enums/enums';

export interface Notification {
  id?: string;
  type?: NotificationType;
  datetime?: string;
  subject?: string;
  body?: string;
}
