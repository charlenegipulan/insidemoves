import React from 'react';
import './CartItem.css';

const CartItem = (props) => (
    <div className="CartItem">
        <p>Qty: 
            <button onClick={() => props.handleRemoveItem(props.item.product)}> - </button>
            <span>{props.item.quantity} </span>&nbsp;{props.item.product.name} 
        </p>
    </div>
);

export default CartItem;