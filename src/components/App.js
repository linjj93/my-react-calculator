import React, { Component } from 'react';

import Header from './Header';
import Display from './Display';
import Buttons from './Buttons';


class App extends Component {
  state = {
    display: '0',
    evaluation: null,
    currentNumberIsFloat: false,
    restrictions: {
      'integer': ['('],
      '+': ['+', '×', '÷', ')'],
      '-': ['-', '+', '×', '÷', ')'],
      '×': ['×', '+', '÷', ')'],
      '÷': ['÷', '+', '×', ')'],
      '(': ['+', '-', '×', '÷', ')'],
      ')': ['integer'],
      '.': ['+', '-', '×', '÷', '(', ')']
    }
  }

  buttonPress = (button) => {
    if (button.textContent === '+' || button.textContent === '-' || button.textContent === '×' || button.textContent === '÷') {
      if (this.state.evaluation) {
        return;
      } else {
        this.setState({
          currentNumberIsFloat: false
        })
      }
    }

    if (!this.state.evaluation) {
      let prevElement = this.state.display[this.state.display.length - 1];

      if (!isNaN(prevElement)) {
        if (this.state.restrictions['integer'].includes(button.textContent)) {
          return;
        }
      } else if (this.state.restrictions[prevElement].includes(button.textContent)) {
        return;
      } else if (prevElement === ')' && button.className === 'integer') {
        return;
      }
    }

    

    if (this.state.evaluation || this.state.display === '0') {
      this.setState({
        display: button.textContent,
        evaluation: null,
        currentNumberIsFloat: false
      })
    } else {
      this.setState(prevState => ({
        display: prevState.display.toString() + button.textContent.toString()
      })
    )}
  }

  decimalPress = () => {
    if (!this.state.currentNumberIsFloat) {
      this.setState( prevState => ({
        display: prevState.display.toString() + '.',
        currentNumberIsFloat: true
      })
    )}
  }

  resetDisplay = () => {
    this.setState({
      display: '0',
      evaluation: null,
      currentNumberIsFloat: false
    })
  }

  delete = () => {
    let span = this.state.display;
    //if deleting operator, check whether number from nearest operator to next nearest operator contains decimal
    //if contains, change floatstatus to True, else change to false
    //special case: delete last operator -> therefore left with a number with no other operator before interval


    if (isNaN(span[span.length - 1])) {
      for (let i = span.length; i >= 0; i -= 1) {       //loop backwards from the element before the element to be deleted
        if (!isNaN(span.slice(0, span.length - 1))) {   //handle special case here
          if (span.includes('.')) {
            this.setState({
              currentNumberIsFloat: true
            })
          } else {
            this.setState({
              currentNumberIsFloat: false
            })
          }
        }
        if (isNaN(span[i])) {
          if (span.slice(i+1, span.length-1).includes('.')) {
            this.setState({
              currentNumberIsFloat: true
            })
          } else {
            this.setState({
              currentNumberIsFloat: false
            })
          }
        }
      }
    }
    if (span[span.length - 1] === '.') {
      this.setState({
        currentNumberIsFloat: false
      })
    }
    if (span.length === 1) {
      this.setState({
        display: '0',
      })
    } else {
      this.setState({
        display: span.toString().slice(0, span.toString().length - 1)
      })
    }
    this.setState({
      evaluation: null
    })
  }

  evaluateResult = () => {

    let answer = this.state.display;
    if (answer.includes("×") || answer.includes("÷")) {
      answer = answer.replace("×", "*");
      answer = answer.replace("÷", "/");
    }
    // eslint-disable-next-line
    try {
      this.setState({
        // eslint-disable-next-line
        evaluation: "=  " + eval(answer)
      });
    }

    catch (err) {
      alert("Invalid Calculation. Check for missing parentheses, or extra operators etc.")
    }
  }

  render() {
    return (
      <div className = "container">
        <div className = "title">
        <p>Simple HTML Calculator</p>
        <p>Made with CSS Flexbox and ReactJS</p>
        </div>

        <div className = "noselect calculator">
          <Header />

          <Display display = {this.state.display}
                   evaluation = {this.state.evaluation}
                    />

          <Buttons press = {this.buttonPress}
                   reset = {this.resetDisplay}
                   delete = {this.delete}
                   evaluate = {this.evaluateResult}
                   decimal = {this.decimalPress}
                   />

        </div>

      </div>


    )
  }
};

export default App;
