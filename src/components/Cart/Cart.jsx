import React from 'react';
import './Cart.css'
import CartItems from '../CartItems/CartItems';

const Cart = (props) => {
    // let total = props.cart.items.reduce((tot, item) => tot + parseFloat(item.product.price * item.quantity, 0));
    let total = props.cart.items.reduce((tot, item) => tot + (item.product.price * item.quantity), 0);
    let itemCount = props.cart.items.reduce((tot, item) => tot + (item.quantity), 0);
                return (
        <section className="Cart">
            <div className="CartItems-panel">
                <CartItems
                    items={props.cart.items}
                    handleRemoveItem={props.handleRemoveItem} 
                    total={this.total}
                />
                </div>
                <div className="Cart-Summary-panel">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Number of items: {itemCount} </p>
                    <p> Subtotal: {total} </p>
                    <p>Tax: 7.25%</p>
                    <h3>Total:  ${parseFloat(total + (total * .0725)).toFixed(2)}</h3>
                    <button> Checkout </button>
                </div>
        </section>
    );
};

export default Cart;