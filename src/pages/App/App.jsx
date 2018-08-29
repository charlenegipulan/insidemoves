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
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import NavBar2 from '../../components/NavBar2/NavBar2';
import Header from '../../components/Header/Header'
import productsAPI from '../../utils/productsAPI';
import ordersAPI from '../../utils/ordersAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      cart: null
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

  handleAddItem = (productId) => {
    productsAPI.addProduct(productId)
    .then(cart => {
      this.setState({ cart });
    })
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
    this.setState({user}, function() {
      ordersAPI.getCart()
      .then(cart => this.setState({ cart }));
    });
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
            <NavBar2 
              cart={this.state.cart}
              handleRemoveItem={this.handleRemoveItem}
            />
            <Header />
            <Switch>
              <Route exact path="/" render={() => 
                <LandingPage />
              } />
            <Route exact path="/shop" render={(props) =>
              <ShopPage 
                {...props}
                handleAddItem={this.handleAddItem}
              />
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
            <Route exact path="/checkout" render={({ history }) =>
              <CheckoutPage
                user={this.state.user}
                cart={this.state.cart}
                history={history}
            />} 
            
            />
          </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
