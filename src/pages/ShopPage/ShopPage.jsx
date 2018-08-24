import React from 'react';
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'

const ShopPage = (props) => {
    
    return (
        <div className="ShopPage">
            <header className="ShopPage-header">
                <Header />
                <NavBar />
            </header>
        </div>
    )
}

export default ShopPage;
