import React from "react";
import Button from 'react-bootstrap/Button';

class CounterClass extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.state = {
      number: 0,
    };
  }

  increment() {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    return (
      <div>
        <h3>Classbase Component</h3>
        <h1>Counter = {this.state.number}</h1>
        <Button onClick={this.increment}>Increment</Button>
        <hr />
      </div>
    );
  }
}
export default CounterClass;
