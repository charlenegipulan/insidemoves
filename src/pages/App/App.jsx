import React, { Component } from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import ShopPage from '../ShopPage/ShopPage';
import {
  Switch,
  Route,
} from 'react-router-dom'
import LogInPage from '../LogInPage/LogInPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import productsAPI from '../../utils/productsAPI';
import ordersAPI from '../../utils/ordersAPI';
import SearchBar from '../../components/SearchBar/SearchBar';
// import SearchResultsPage from '../../SearchResultsPage/SearchResultsPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      cart: null,
      products: [],
      results: [],
      loading: true
    };
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

  handleSelectedProduct = (product) => {
    this.props.history.push(`/shop/${product._id}`);
  }

  /*---------- Lifecycle Methods ----------*/
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user}, function() {
      ordersAPI.getCart()
      .then(cart => this.setState({ cart }));
    });
    productsAPI.index().then(products => {
        this.setState({products});
    });
  }

  render() {
    return (
      <div className="App">
          <React.Fragment>
            <NavBar 
              user={this.state.user} 
              handleLogout={this.handleLogout}
              cart={this.state.cart}
              handleRemoveItem={this.handleRemoveItem}
            />
            <Switch>
              <Route exact path="/" render={() => 
                <LandingPage  
                  user={this.state.user}
                />
              } />
            <Route exact path="/shop" render={(props) =>
              <ShopPage 
                {...props}
                products={this.state.products}
                handleSelectedProduct={this.handleSelectedProduct}
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
                history={history} />
            }
            />
            <Route exact path="/shop/:id" render={( props ) =>
              <DetailsPage 
                {...props}
                handleAddItem={this.handleAddItem}
                products={this.state.products}
                />
            }/> 
              <SearchBar 
                handleSearchResults={this.handleSearchResults}
                />
              {/* <Search /> */}
          </Switch>
          </React.Fragment>
      </div>
    );
  }
}

export default App;
