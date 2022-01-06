import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="allItems">
        <div className="inputBtn"> 0 </div>
        <div className="grid-container">
          <div className="grid-item"> AC </div>
          <div className="grid-item"> +/- </div>
          <div className="grid-item"> % </div>
          <div className="grid-item operations"> ÷ </div>
          <div className="grid-item"> 7 </div>
          <div className="grid-item"> 8 </div>
          <div className="grid-item"> 9 </div>
          <div className="grid-item operations"> x </div>
          <div className="grid-item"> 4 </div>
          <div className="grid-item"> 5 </div>
          <div className="grid-item"> 6 </div>
          <div className="grid-item operations"> - </div>
          <div className="grid-item"> 1 </div>
          <div className="grid-item"> 2 </div>
          <div className="grid-item"> 3 </div>
          <div className="grid-item operations"> + </div>
          <div className="grid-item addColSpan"> 0 </div>
          <div className="grid-item"> . </div>
          <div className="grid-item operations"> = </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
