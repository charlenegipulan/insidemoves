import React, { Component } from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
          <LandingPage />
      </div>
    );
  }
}

export default App;
