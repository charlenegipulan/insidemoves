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
import SignUpPage from '../SignUpPage/SignUpPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import Cart from '../../components/Cart/Cart'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cart: []
    }
  }

  /*---------- Callback Methods ----------*/

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddItem = (product) => {
    this.setState(prevState => {
      let item = prevState.cart.find(item => item.product === product);
      var newCart;
      if (item) {
        item.quantity++;
        newCart = prevState.cart;
      } else {
        item = {
          product,
          quantity: 1
        };
        newCart = prevState.cart.concat(item);
      }
      return {cart: newCart};
    });
  }

  handleRemoveItem = (product) => {
    this.setState(prevState => {
      var itemIdx = prevState.cart.findIndex(item => item.product === product);
      var item = prevState.cart[itemIdx, 1];
      if (item.quantity === 1) {
        prevState.cart.splice(itemIdx, 1);
      } else {
        item.quantity--;
      }
      return prevState;
    });
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
             <NavBar 
                user={this.state.user} 
                handleLogout={this.handleLogout}
                />
              <Switch>
                <Route exact path="/" render={() => 
                  <LandingPage />
                } />
            <Route exact path="/shop" render={() =>
              <ShopPage />
            } />
            <Route exact path="/login" render={(props) =>
              <LogInPage 
              {...props}
              handleLogin={this.handleLogin}/>
            } />
            <Route exact path="/signup" render={(props) =>
              <SignUpPage 
                {...props}
                handleSignup={this.handleSignup}/>
            } 
            />
            <Cart 
              cart={this.state.cart} 
              handleRemoveItem={this.handleRemoveItem}
            />
          </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
