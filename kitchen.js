import {inject} from './di';
import {Stove} from './stove';

@inject(Stove)
export class Kitchen {
  constructor(stove) {
    this.stove = stove;
  }

  hello() {
    console.log('Making some eggs...');
    this.stove.on();
    console.log('Scrambled eggs are ready.');
  }
}