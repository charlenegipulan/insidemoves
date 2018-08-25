import React from 'react';
import './CartItems.css';
import CartItem from '../CartItem/CartItem';

export default (props) => (
    <div className="CartItems">
        {props.cart.map(item => <CartItem 
            key={item.product.sku}
            item={item} 
            handleRemoveItem={props.handleRemoveItem}
        />)}
    </div>
);