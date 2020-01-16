import {Gym} from './gym';
import {Activity} from './activity';

export interface GymsFilter {
  gyms?: Gym[];
  activities?: Activity[];
  review?: number;
  ville?: string;
}
