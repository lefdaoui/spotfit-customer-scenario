import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Gym} from '../../../shared/models/gym';
import {Subscription} from '../../../shared/models/subscription';
import {ConfigService} from '../../../shared/services/config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gym-card',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.scss'],
})
export class GymCardComponent implements OnInit {
  @Output() onCardClicked = new EventEmitter<number>();
  @Output() onExit = new EventEmitter();
  @Input() gym: Gym;
  @Input() flat: boolean =  false;

  constructor(
    private configService: ConfigService,
    private router: Router,
  ) {

  }

  ngOnInit() {

  }

  getSubscriptionByDuration(days: number) {
    const subs = this.gym.subscriptions.filter((sub: Subscription) => sub.duration === days);
    return subs.length > 0 ? subs[0] : null;
  }

  getFullAccessPrice(category: string) {
    return this.configService.getFullAccessPrice(category);
  }

  onApply($event: MouseEvent, id: number) {
    // todo: implement this action
    $event.stopPropagation();
    this.router.navigateByUrl('/payment/checkout');
  }

  // onClick(id: number) {
  //   this.onCardClicked.emit(id);
  // }

  exit() {
    this.onExit.emit();
  }

  onClick(id: number) {
    this.router.navigateByUrl('/gyms/gym-details');
  }
}
