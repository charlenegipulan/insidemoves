import React from 'react';
import './Cart.css'
import CartItems from '../CartItems/CartItems';

const Cart = (props) => {
    // let total = props.cart.reduce((tot, item) => tot + parseFloat(item.product.price.replace('$', '')) * item.quantity, 0);
    return (
    <section className="Cart">
        Cart Items
        {/* <CartItems 
        cart={props.cart}
        handleRemoveItem={props.handleRemoveItem} */}
        {/* /> */}
        {/* <div>Total: {total} </div> */}
    </section>
    );
};

export default Cart;