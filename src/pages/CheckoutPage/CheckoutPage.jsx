import React from 'react';
import Header from '../../components/Header/Header'
import Cart from '../../components/Cart/Cart';

const CheckoutPage = (props) => {
    
    return (
        <div className="CheckoutPage">
            <header className="CheckoutPage-header">
                <Header />
                <Cart cart={props.cart}/>
            </header>
        </div>
    )
}

export default CheckoutPage;
