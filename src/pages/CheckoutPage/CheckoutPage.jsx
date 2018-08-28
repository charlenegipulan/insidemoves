import React from 'react';
import Cart from '../../components/Cart/Cart';

const CheckoutPage = (props) => {
    
    return (
        <div className="CheckoutPage">
            {props.cart && 
                <Cart
                    cart={props.cart}
                    handleRemoveItem={props.handleRemoveItem}
                />
            }
        </div>
    );
}

export default CheckoutPage;
