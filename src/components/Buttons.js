import React, {Component} from 'react';


class Buttons extends Component {
  state = {

  }

  buttonPress = (e) => {
    this.props.press(e.target);
  }
  
  decimalPress = () => {
    this.props.decimal();
  }

  resetDisplay = () => {
    this.props.reset();
  }

  delete = () => {
    this.props.delete();
  }

  evaluateResult = () => {
    this.props.evaluate();
  }
  
  render() {
    return (
      <div className = "buttons">
        <div className = "buttons-1">
          <div onClick = {this.buttonPress.bind(this)} className = "integer">1</div>
          <div onClick = {this.buttonPress.bind(this)} className = "integer">4</div>
          <div onClick = {this.buttonPress.bind(this)} className = "integer">7</div>
          <div onClick = {this.resetDisplay.bind(this)} className = "AC-btn last-row">AC</div>
        </div>
        <div className = "buttons-2">
          <div onClick = {this.buttonPress.bind(this)} className = "integer">2</div>
          <div onClick = {this.buttonPress.bind(this)} className = "integer">5</div>
          <div onClick = {this.buttonPress.bind(this)} className = "integer">8</div>
          <div onClick = {this.buttonPress.bind(this)} className = "integer last-row">0</div>
        </div>
        <div className = "buttons-3">
          <div onClick = {this.buttonPress.bind(this)} className = "integer">3</div>
          <div onClick = {this.buttonPress.bind(this)} className = "integer">6</div>
          <div onClick = {this.buttonPress.bind(this)} className = "integer">9</div>
          <div onClick = {this.decimalPress.bind(this)} className = "last-row">.</div>
        </div>
        <div className = "buttons-4 operators">
          <div onClick = {this.buttonPress.bind(this)} className = "operator">+</div>
          <div onClick = {this.buttonPress.bind(this)} className = "operator">-</div>
          <div onClick = {this.buttonPress.bind(this)} className = "operator">×</div>
          <div onClick = {this.buttonPress.bind(this)} className = "operator last-row">÷</div>
        </div>
        <div className = "buttons-5 operators">
          <div onClick = {this.delete.bind(this)} className = "last-col">Del</div>
          <div onClick = {this.buttonPress.bind(this)} className = "operator last-col">(</div>
          <div onClick = {this.buttonPress.bind(this)} className = "operator last-col">)</div>
          <div onClick = {this.evaluateResult.bind(this)} className = "equal-btn last-row">=</div>
        </div>
          
      </div>
    )

  }
};

export default Buttons;
