import React, { Component } from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import ShopPage from '../ShopPage/ShopPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import LogInPage from '../LogInPage/LogInPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={() => 
              <LandingPage />
            } />
            <Route exact path="/shop" render={() =>
              <ShopPage />
            } />
            <Route exact path="/login" render={() =>
              <LogInPage />
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
