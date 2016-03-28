import "babel-polyfill";

import {Injector} from './di';
import {Kitchen} from './kitchen';

function main() {
  let injector = new Injector([]);
  let kitchen = injector.get(Kitchen);

  kitchen.hello();
}

main();
