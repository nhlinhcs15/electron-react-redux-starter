import { CountConstance } from './type';

export function showCounter() {
  return {
    type: CountConstance.SHOW_COUNTER,
  };
}

export function hideCounter() {
  return {
    type: CountConstance.HIDE_COUNTER,
  };
}
