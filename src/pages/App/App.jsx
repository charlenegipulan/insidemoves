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
import PaymentPage from '../PaymentPage/PaymentPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import productsAPI from '../../utils/productsAPI';
import ordersAPI from '../../utils/ordersAPI';
import tokenService from '../../utils/tokenService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      favorites: [],
      cart: null,
      products: [],
      filterCategory: '',
      brandFilter: '',
      results: [],
      loading: true,
      selectedProduct: null
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

  handleRemoveQuantity = (productId) => {
    productsAPI.removeProduct(productId)
    .then(cart => {
      this.setState({ cart });
    })
  }

  handleSelectedProduct = (product) => {
    this.props.history.push(`/shop/${product._id}`);
  }

  handleUpdateFilterCategory = (cat) => {
    this.setState({ 
      brandFilter: '', 
      filterCategory: cat, 
    }, 
    function() {
      this.props.history.push(`/shop`);
    });
  }

  handleClearFilter = () => {
    this.setState({
      brandFilter: '',
      filterCategory: ''
    })
  }

  handleUpdateFilterBrand = (brand) => {
    this.setState({ 
      brandFilter: brand, 
      filterCategory: '', 
    }, 
    function() {
      this.props.history.push(`/shop`);
    });
  }

  handleAddItemToFavorites = (productId) => {
    if (this.state.user.favorites.some(f => f === productId)) return;
    productsAPI.favoriteItem(productId)
    .then(updatedToken => {
      tokenService.setToken(updatedToken);
      this.setState({ user: userService.getUser() });
    })
  }
  /*---------- Lifecycle Methods ----------*/
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user}, function() {
      if (user) {
        ordersAPI.getCart()
        .then(cart => this.setState({ cart }));
      }
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
                  handleClearFilter={this.handleClearFilter}
                />
              } />
            <Route exact path="/shop" render={(props) =>
              <ShopPage 
                {...props}
                products={this.state.products}
                handleSelectedProduct={this.handleSelectedProduct}
                handleAddItem={this.handleAddItem}
                handleUpdateFilterCategory={this.handleUpdateFilterCategory}
                handleUpdateFilterBrand={this.handleUpdateFilterBrand}
                filterCategory={this.state.filterCategory}
                brandFilter={this.state.brandFilter}
                handleShowModal={this.handleShowModal}
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
            <Route exact path="/checkout" render={( props ) =>
              <CheckoutPage
                {...props}
                user={this.state.user}
                cart={this.state.cart}
                handleRemoveQuantity={this.handleRemoveQuantity}
                handleUpdateFilterCategory={this.handleUpdateFilterCategory}
                handleAddItem={this.handleAddItem}
              />
            }/>
            <Route exact path="/payment" render={({ history }) =>
              <PaymentPage
                user={this.state.user}
                cart={this.state.cart}
                handleUpdateFilterCategory={this.handleUpdateFilterCategory}
                history={history} />
            }/>
            <Route exact path="/favorites" render={({ props }) =>
              <FavoritesPage
                {...props}
                user={this.state.user}
                favorites={this.state.favorites}
                // history={history} 
                products={this.state.products}
                handleSelectedProduct={this.handleSelectedProduct}
                handleAddItem={this.handleAddItem}
                handleUpdateFilterCategory={this.handleUpdateFilterCategory}
              />
            }/>
            <Route exact path="/shop/:id" render={( props ) =>
              <DetailsPage 
                {...props}
                user={this.state.user}
                handleAddItem={this.handleAddItem}
                products={this.state.products}
                handleAddItemToFavorites={this.handleAddItemToFavorites}
                handleUpdateFilterCategory={this.handleUpdateFilterCategory}
              />
            }/> 
          </Switch>
          </React.Fragment>
      </div>
    );
  }
}

export default App;
