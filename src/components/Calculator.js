import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = async (e) => {
    const response = await calculate(this.state, e.target.name);
    this.setState(() => ({
      total: response.total,
      next: response.next,
      operation: response.operation,
    }));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="allItems">
        <div className="inputBtn">
          {next || total || 0}
        </div>
        <div className="grid-container">
          <button type="button" onClick={this.handleClick} className="grid-item" name="AC"> AC </button>
          <button type="button" onClick={this.handleClick} className="grid-item" name="+/-"> +/- </button>
          <button type="button" onClick={this.handleClick} className="grid-item" name="%"> % </button>
          <button type="button" onClick={this.handleClick} className="grid-item operations" name="÷"> ÷ </button>
          <button type="button" onClick={this.handleClick} className="grid-item" name="7"> 7 </button>
          <button type="button" onClick={this.handleClick} className="grid-item" name="8"> 8 </button>
          <button type="button" onClick={this.handleClick} className="grid-item" name="9"> 9 </button>
          <button type="button" onClick={this.handleClick} className="grid-item operations" name="x"> x </button>
          <button type="button" onClick={this.handleClick} className="grid-item" name="4"> 4 </button>
          <button type="button" onClick={this.handleClick} className="grid-item" name="5"> 5 </button>
          <button type="button" onClick={this.handleClick} className="grid-item" name="6"> 6 </button>
          <button type="button" onClick={this.handleClick} className="grid-item operations" name="-"> - </button>
          <button type="button" onClick={this.handleClick} className="grid-item" name="1"> 1 </button>
          <button type="button" onClick={this.handleClick} className="grid-item" name="2"> 2 </button>
          <button type="button" onClick={this.handleClick} className="grid-item" name="3"> 3 </button>
          <button type="button" onClick={this.handleClick} className="grid-item operations" name="+"> + </button>
          <button type="button" onClick={this.handleClick} className="grid-item addColSpan" name="0"> 0 </button>
          <button type="button" onClick={this.handleClick} className="grid-item" name="."> . </button>
          <button type="button" onClick={this.handleClick} className="grid-item operations" name="="> = </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
