import React from 'react';
import Header from '../../components/Header/Header'
import NavBar2 from '../../components/NavBar2/NavBar2'
import productsAPI from '../../utils/productsAPI';
import './FavoritesPage.css';

class FavoritesPage extends React.Component {
    constructor(props) {
        super(props)
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
            <Header />
            <NavBar2 
                handleUpdateFilterCategory={this.props.handleUpdateFilterCategory}
            />
            <h3> Your favorite items:</h3>
            <hr></hr>
            {this.state.favorites.map(f => <div className="favorite-items"><img src={f.img} /> {f.name}</div>)}
        </div>
    )
    }
}

export default FavoritesPage;

