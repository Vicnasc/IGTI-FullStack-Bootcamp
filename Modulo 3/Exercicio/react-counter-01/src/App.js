import React, { Component } from 'react';
import Counter from './components/Counter/Counter.js';
import Counter2 from './components/Counter/Counter2.js';
import Band from './components/band.js';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 3,
      steps: 0,
    };
  }

  handleCount = (clickType) => {
    const { currentCounter, steps } = this.state;

    this.setState({
      currentCounter:
        clickType === '+' ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;

    return (
      <>
        <Band />

        <h3>Counter</h3>
        <Counter />
        <Counter />
        <Counter />

        <h3>Counter 2</h3>
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentSteps={steps}
        />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentSteps={steps}
        />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentSteps={steps}
        />
      </>
    );
  }
}
