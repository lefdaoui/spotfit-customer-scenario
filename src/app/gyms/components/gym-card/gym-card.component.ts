import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Gym} from '../../../shared/models/gym';
import {Subscription} from '../../../shared/models/subscription';
import {ConfigService} from '../../../shared/services/config.service';

@Component({
  selector: 'app-gym-card',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.scss'],
})
export class GymCardComponent implements OnInit {
  @Output() onCardClicked = new EventEmitter<number>();
  @Input() gym: Gym;
  @Input() flat: boolean =  false;

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit() {

  }

  getSubscriptionByDuration(days: number) {
    const subs = this.gym.subscriptions.filter((sub: Subscription) => sub.duration === days);
    return subs.length > 0 ? subs[0] : null;
  }

  getFullAccessPrice(category: string) {
    return this.configService.getFullAccessPrice(category);
  }

  onApply(id: number) {
    // todo: implement this action
  }

  // onClick(id: number) {
  //   this.onCardClicked.emit(id);
  // }
}
