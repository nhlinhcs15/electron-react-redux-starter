import { Enum } from '../ulti';

export const CountConstance = Object.freeze({
  SHOW_COUNTER: 'SHOW_COUNTER' as 'SHOW_COUNTER',
  HIDE_COUNTER: 'HIDE_COUNTER' as 'HIDE_COUNTER',
});
export type CountConstance = Enum<typeof CountConstance>;

interface IShowCounterAction {
  type: typeof CountConstance.SHOW_COUNTER;
}

interface IHideCounterAction {
  type: typeof CountConstance.HIDE_COUNTER;
}

export type ActionType = IShowCounterAction | IHideCounterAction;

export const initState = Object.freeze<CounterStates>({
  visible: true,
});

export type CounterStates = {
  visible: boolean;
};
