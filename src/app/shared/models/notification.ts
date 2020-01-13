export interface Notification {
  id?: string;
  type?: 'message'|'subscription-status'|'refer-friend';
  datetime?: string;
  subject?: string;
  body?: string;
}
