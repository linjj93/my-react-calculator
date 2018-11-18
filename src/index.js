import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


class Doc extends React.Component {
  componentDidMount(){
    document.title = "Calculator"
  }

  render() {
    return (
      <App />
    )
  }
}

ReactDOM.render(
  <Doc/>,
  document.getElementById('root')
);
