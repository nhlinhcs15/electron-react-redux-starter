import React from 'react';
import { connect } from 'react-redux';
import { GlobalStates } from '../../store';
import { Button, Root } from './styled';

type Props = {
  visible: boolean;
};

type States = {
  count: number;
};

const initState = Object.freeze<States>({
  count: 0,
});

class Counter extends React.Component<Props, States> {
  state = initState;

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <Root visible={this.props.visible}>
        <Button onClick={this.handleClick}>Click me!</Button>
        Counter: {this.state.count}
      </Root>
    );
  }
}

const connected = connect((state: GlobalStates) => ({
  visible: state.counter.visible,
}))(Counter);

export { connected as Counter };
