import React from 'react';

const NavBar = (props) => {
  return (
    <div className = "topnav">
      <div className = "dropdown">
        <div className = "dropdown-heading" id = "home">
          <a href="https://linjj93.github.io/index.html">Home</a>
        </div>
      </div>
  
      <div className = "dropdown">
        <div className = "dropdown-heading" id = "projects">Projects</div>
        <div className = "dropdown-content">
          <a href="https://linjj93.github.io/hangman.html">Hangman</a>
          <a href="https://linjj93.github.io/expense-tracker.html">Expense Tracker</a>
        </div>
      </div>
      
      <a href="#learning" id = "learning">Learning Resources</a>

      <div className = "dropdown">
        <div className = "dropdown-heading" id = "life">Life</div>
        <div className = "dropdown-content">
          <a href="https://linjj93.github.io/backpacking-trip">Backpacking Trip 2017</a>
        </div>
      </div>
    </div>   
  )
}

export default NavBar;
