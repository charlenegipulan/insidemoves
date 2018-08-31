import React from 'react';
import Cart from '../../components/Cart/Cart';
import CartItems from '../../components/CartItems/CartItems';
import './CheckoutPage.css';
import Header from '../../components/Header/Header'
import NavBar2 from '../../components/NavBar2/NavBar2'
const CheckoutPage = (props) => {
    return (
        
        <div className="CheckoutPage">
        <NavBar2 
            products={props.filteredProducts}
            handleUpdateFilterCategory={props.handleUpdateFilterCategory}
        />
        <Header />
            <div className="CheckoutPage-cart">
                {props.cart && 
                    <Cart
                        cart={props.cart}
                        handleRemoveQuantity={props.handleRemoveQuantity}
                        handleAddItem={props.handleAddItem}
                        handleUpdateFilterCategory={props.handleUpdateFilterCategory}
                    />
                }
            </div>
        </div>
    );
}

export default CheckoutPage;
