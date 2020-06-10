import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { counter } from './reducer';

const reducer = combineReducers({ counter });

export type GlobalStates = ReturnType<typeof reducer>;
export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
