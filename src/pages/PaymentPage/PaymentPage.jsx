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
            <div>
            <label for="inputEmail4">First Name</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Charlene" />
            </div>
            <div>
            <label for="inputPassword4">Last Name</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Gipulan" />
            </div>
        <div>
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div>
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div class="row align-items-center justify-content-center">
            <div>
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" placeholder="Los Angeles"/>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div>
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
            &nbsp;&nbsp;&nbsp;
            <div>
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" placeholder="91776"/> 
            </div>
        </div>
        <br />
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Submit Order</button>
        </form>
            </div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <h3>Thank  you for your purchase!</h3>
                        <p> You will recieve a confirmation email shortly.</p>
                        <p> Your order number is 5379DF053C</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    );
}

export default PaymentPage;
