import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/scss/bootstrap.scss';
import 'normalize.css/normalize.css';
import Main from './components/layout';
import './styles/styles.scss';
import store from './stores';

class App extends Component {
  render() {
    return (
      <Provider store={store.initialize()}>
        <div>
          <Main />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
