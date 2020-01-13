import {Notification} from '../models/notification';

export let NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'subscription-status',
    datetime: '2 min',
    subject: 'Pass expiration date',
    body: 'Lorem ipsum dolor sit amet, consectetur adip desiscing elit. Sed non risus. Suspendisse ...',
  },
  {
    id: '2',
    type: 'message',
    datetime: '5 min',
    subject: 'Message from City club',
    body: 'Lorem ipsum dolor sit amet, consectetur adinbip iscing elit. Sed non risus. Suspendisse ...',
  },
  {
    id: '3',
    type: 'refer-friend',
    datetime: '5 min',
    subject: 'Refer friends',
    body: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit pendisse .',
  },
];
