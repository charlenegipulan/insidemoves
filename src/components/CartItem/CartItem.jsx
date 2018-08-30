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
            <div className="InputSpinner">
              <input type="text" class="form-control" value={props.item.quantity} />
              <div className="input-group-vertical">
                <button class="btn btn-default" type="button" onClick={() => props.handleAddItem(props.item.product._id)}><i class="fa fa-caret-up"></i></button>
                <button class="btn btn-default" type="button" onClick={() => props.handleRemoveQuantity(props.item.product._id)}><i class="fa fa-caret-down"></i></button>
              </div>
            </div>
        </div>
    </div>
    )
}


export default CartItem;