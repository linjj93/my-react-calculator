import React, { Component } from 'react';

import NavBar from './Navbar';
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
      '.': ['+', '-', '×', '÷', '(', ')','.']
    }
  }

  buttonPress = (button) => {
    //3 situations - starting from zero, after evaluated answer, or normal (without evaluation)
    //handle starting condition
    if (this.state.display === '0') {
      if (button.textContent === '+' || button.textContent === '-' || button.textContent === '×' || button.textContent === '÷') {
        this.setState(prevState => ({
          display: prevState.display.toString() + button.textContent.toString()
        })
      )} else {
        this.setState({
          display: button.textContent,
          evaluation: null,
          currentNumberIsFloat: false
        })
      } 
    } else if (this.state.evaluation) {  //handle restart condition after evaluating expression
        if (button.textContent === '+' || button.textContent === '-' || button.textContent === '×' || button.textContent === '÷') {
          this.setState({
            display: this.state.evaluation.slice(2) + button.textContent,
            evaluation: null,
            currentNumberIsFloat: false
          })  //continue on from stored evaluation by keying in operator
            
        } else { //continue new calculation by keying in new number
          this.setState({
            display: button.textContent,
            evaluation: null,
            currentNumberIsFloat: false
          })
        }
      } else if (!this.state.evaluation) {
          let prevElement = this.state.display[this.state.display.length - 1];
          // 2 cases - last element is either a number or operator
          if (!isNaN(prevElement)) {    //handle restrictions whenever new button is pressed after a number
            if (this.state.restrictions['integer'].includes(button.textContent)) {
              return;
            } else if (button.textContent === '.'){
                this.decimalPress();
            } else {
                this.setState(prevState => ({
                display: prevState.display.toString() + button.textContent.toString()
                })
              )}

          } else if (this.state.restrictions[prevElement].includes(button.textContent)) {
              return;

          } else if (prevElement === ')' && button.className === 'integer') {
              return;

          } else {
            this.setState(prevState => ({
              display: prevState.display.toString() + button.textContent.toString()
              })
            )}
          }

          if (button.textContent === '+' || button.textContent === '-' || button.textContent === '×' || button.textContent === '÷') {
            this.setState({
              currentNumberIsFloat: false,
            })
          }
        }
          
    

  decimalPress = () => {
    if (this.state.evaluation) {
      this.setState({
        display: '0',
        evaluation: null,
        currentNumberIsFloat: true
      })
    }
    if (!this.state.currentNumberIsFloat) {
      this.setState( prevState => ({
        display: prevState.display.toString() + '.',
        currentNumberIsFloat: true
      })
    )}
  }

  resetDisplay = () => {
    this.setState({
      zeroIsPlaceholder: true,
      display: '0',
      evaluation: null,
      currentNumberIsFloat: false
    })
  }

  
    //if deleting operator, check whether number from nearest operator to next nearest operator contains decimal
    //if contains, change floatstatus to True, else change to false
    //special case: delete last operator -> therefore left with a number with no other operator before interval

  delete = () => {
      let span = this.state.display;
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
        zeroIsPlaceholder: true,
        display: '0'
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
      <div className = "super-wrapper">
        <div>
          <NavBar />
        </div>
        
        <div className = "container">
          <div className = "title">
          <p>Simple HTML Calculator</p>
          <p>Made with CSS Flexbox and ReactJS</p>
          </div>
          
          <div className = "noselect calculator">
            

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
      </div>

    )
  }
};

export default App;
