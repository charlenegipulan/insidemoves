import React from 'react';
import Header from '../../components/Header/Header'
import NavBar2 from '../../components/NavBar2/NavBar2'

const FavoritesPage = (props) => {
    return (
        <div className="FavoritesPage">
            <NavBar2 />
            <Header />
            {props.favorites.products}
        </div>
    );
}

export default FavoritesPage;
