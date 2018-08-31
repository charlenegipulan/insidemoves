import React from 'react';
import './PaymentPage.css';
import Cart from '../../components/Cart/Cart';
import Header from '../../components/Header/Header'
import NavBar2 from '../../components/NavBar2/NavBar2'


const PaymentPage = (props) => {
    return (
        <div className="PaymentPage">
            <NavBar2 />
            <Header />
            
            <div class="CheckOut-Form">

                    <form>
        {/* <div class="form-row"> */}
            <div class="form-group col-lg-4">
            <label for="inputEmail4">First Name</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="First Name" />
            </div>
            <div class="form-group col-lg-4">
            <label for="inputPassword4">Last Name</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
            </div>
        <div class="form-group col-lg-8">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div class="form-group col-lg-8">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
            <div class="form-group col-lg-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
            </div>
        <div class="form-row">
            <div class="form-group col-lg-2">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
                <option selected>CA</option>
                <option>CA</option>
                <option>AZ</option>
                <option>KS</option>
                <option>NY</option>
                <option>NV</option>
            </select>
            </div>
            <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip"/> 
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
            </div>
        </div>
    );
}

export default PaymentPage;
