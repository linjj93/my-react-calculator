import React, { Component } from 'react';



class Display extends Component {


  render() {
    return (

      <div className = "display">
        <p>{this.props.display}</p>
        <p className = "answer">{this.props.evaluation}</p>
       </div>
    )
  }
};

export default Display;
