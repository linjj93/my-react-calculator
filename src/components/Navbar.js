import React from 'react';

const NavBar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-white" href="https://linjj93.github.io/index.html">Home<span class="sr-only">(current)</span></a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Personal Projects
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="https://linjj93.github.io/hangman.html">Hangman (Version 2.0)</a>
              <a class="dropdown-item" href="https://linjj93.github.io/expenditure-tracker.html">Expenditure Tracker (Version 1.0)</a>
              <a class="dropdown-item" href="https://linjj93.github.io/my-react-calculator/">Calculator (Version 1.0)</a>
            </div>
          </li>          

          <li class="nav-item">
            <a class="nav-link text-white" href="learning-resources.html">Learning Resources (In Progress)</a>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
