import React from 'react';
import Header from '../../components/Header/Header'
import Cart from '../../components/Cart/Cart';

const CheckoutPage = (props) => {
    
    return (
        <div className="CheckoutPage">
            <header className="CheckoutPage-header">
                <Header />
            </header>

            <div>
                <Cart cart={props.cart}
                    handleRemoveItem={props.handleRemoveItem}
            />
            </div>
        </div>
    )
}

export default CheckoutPage;
