import {Notification} from '../models/notification';
import {NotificationType} from '../enums/enums';

export let NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: NotificationType.SUBSCRIPTION,
    datetime: '2 min',
    subject: 'Pass expiration date',
    body: 'Lorem ipsum dolor sit amet, consectetur adip desiscing elit. Sed non risus. Suspendisse ...',
  },
  {
    id: '2',
    type: NotificationType.MESSAGE,
    datetime: '5 min',
    subject: 'Message from City club',
    body: 'Lorem ipsum dolor sit amet, consectetur adinbip iscing elit. Sed non risus. Suspendisse ...',
  },
  {
    id: '3',
    type: NotificationType.RELATIONSHIPS,
    datetime: '5 min',
    subject: 'Refer friends',
    body: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit pendisse .',
  },
];
