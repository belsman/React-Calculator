import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = calculate(this.state, buttonName);
    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    const { next } = this.state;
    let { total } = this.state;
    total = total || '0';

    return (
      <>
        <div className="container">
          <Display result={next || total} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
