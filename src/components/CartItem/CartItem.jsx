import React from 'react';
import './CartItem.css';

const CartItem = (props) => (
    <div className="CartItem">
            <p> {props.item.name}</p>
            <p> {props.item.price}</p>
            <button onClick={() => props.handleRemoveItem(props.item.product._id)}> - </button>
    </div>
);

export default CartItem;