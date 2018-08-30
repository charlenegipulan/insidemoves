import React from 'react';
import './CartItems.css';
import CartItem from '../CartItem/CartItem';

const CartItems = (props) => (
    <div className="CartItems">
        <h3> Cart Items: </h3>
        <br />
        <br />
        {props.items.length ?
            props.items.map(item => <CartItem 
                item={item} 
                handleRemoveItem={props.handleRemoveItem}
            />)
        :
            <h3> No items</h3>
        }
    </div>
);

export default CartItems;