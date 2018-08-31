import React from 'react';
import Header from '../../components/Header/Header'
import NavBar2 from '../../components/NavBar2/NavBar2'
import productsAPI from '../../utils/productsAPI';

class FavoritesPage extends React.Component {
    constructor() {
        super()
        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
        productsAPI.getFavorites().then(favorites => {
            this.setState({ favorites });
        });
    }

    render() {
    return (
        <div className="FavoritesPage">
            <NavBar2 
                handleUpdateFilterCategory={this.props.handleUpdateFilterCategory}
            />
            <Header />
            {this.state.favorites.map(f => <div>{f.name}</div>)}
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
