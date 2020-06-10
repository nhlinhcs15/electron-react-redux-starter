import { ActionType, CountConstance, CounterStates, initState } from './type';

export const counter = (state = initState, action: ActionType): CounterStates => {
  switch (action.type) {
    case CountConstance.SHOW_COUNTER: {
      return {
        ...state,
        visible: true,
      };
    }
    case CountConstance.HIDE_COUNTER: {
      return {
        ...state,
        visible: false,
      };
    }
    default:
      return state;
  }
};
