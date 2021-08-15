import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";

import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  state = {
    amountValue: 100000,
    yearsValue: 1
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ yearsValue: value });
  };

  render() {
    const { amountValue, yearsValue } = this.state;

    return (
      <div className="App">
        <h4>Я хочу взять в кредит {amountValue} ₽</h4>
        <InputRange
          step={500}
          maxValue={1000000}
          minValue={1000}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4>
          Срок кредита - {yearsValue}
            {yearsValue === 1 && " год"}
            {yearsValue === 2 && " года"}
            {yearsValue === 3 && " года"}
            {yearsValue === 4 && " года"}
            {5 <= yearsValue && " лет"}
        </h4>
        <InputRange
          step={1}
          maxValue={6}
          minValue={1}
          value={yearsValue}
          onChange={this.handleYearChange}
        />
        <Display years={yearsValue} amount={amountValue} />
      </div>
    );
  }
}

export default Calculator;
