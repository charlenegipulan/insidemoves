import React from 'react';
import Header from '../../components/Header/Header'
import NavBar2 from '../../components/NavBar2/NavBar2'
import productsAPI from '../../utils/productsAPI';

class FavoritesPage extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    // componentDidMount() {
    //     productsAPI.getFavorites().then(products => {
    //         this.setState({products, filteredProducts: [...products]});
    //     });
    // }

    render() {
    return (
        <div className="FavoritesPage">
            <NavBar2 />
            <Header />
        </div>
    )
    }
}

export default FavoritesPage;

// make a productsAPI.getFavorites() from within componentDidMount
// add a server route
// add the controller method/action
// in the controller action, query Product.find({_id: req.user.favorites})
// return those babies
// put those babies on state
