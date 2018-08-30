import React from 'react';
import Cart from '../../components/Cart/Cart';
import Header from '../../components/Header/Header'
import NavBar2 from '../../components/NavBar2/NavBar2'


const PaymentPage = (props) => {
    return (
        <div className="CheckoutPage">
            <NavBar2 />
            <Header />
            {/* <Cart/> */}
        </div>
    );
}

export default PaymentPage;
