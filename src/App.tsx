import React from 'react';
import { Provider } from 'react-redux';
import { Counter } from './components/counter';
import { store } from './store';
import { hideCounter, showCounter } from './store/action';
import './App.css';

export class App extends React.Component {
  handleClick = () => {
    if (store.getState().counter.visible) {
      store.dispatch(hideCounter());
    } else {
      store.dispatch(showCounter());
    }
  };
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <p>
            <button onClick={this.handleClick}>Toggle counter</button>
          </p>
          <Counter />
        </div>
      </Provider>
    );
  }
}
