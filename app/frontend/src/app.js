import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import Main from './components/layout';
import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
