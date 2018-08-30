import React from 'react';
import './CartItem.css';

const CartItem = (props) =>  {
    return(
    <div className="CartItem">
        <div className="CartItem-image-panel">
            <p> <img src={props.item.product.img} /></p>
        </div>
        <div className="CartItem-details-panel">
            <b>{props.item.product.name}</b>
            <br />
            Price: &nbsp;&nbsp;&nbsp;{props.item.product.price}
            <br />
            Quantity: &nbsp;&nbsp;&nbsp;{props.item.quantity}
            <br />
            <button onClick={() => props.handleRemoveItem(props.item.product._id)}> - </button>
        </div>
    </div>
    )
}


export default CartItem;