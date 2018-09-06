import React, { Component } from 'react';

import ExampleContainer from './containers/ExampleContainer';

import 'reset-css';
import './assets/base.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Node Shell</h1>
        </header>
        <section className="App-body">
          <ExampleContainer />
        </section>
      </div>
    );
  }
}

export default App;
