import React from 'react';
import './CartItem.css';

const CartItem = (props) => (
    <div className="CartItem">
            <p> <img src={props.item.product.img} /></p>
            <p> {props.item.product.name}</p>
            <p> {props.item.product.price}</p>
            <p> {props.item.quantity}</p>
            <button onClick={() => props.handleRemoveItem(props.item.product._id)}> - </button>
    </div>
);

export default CartItem;