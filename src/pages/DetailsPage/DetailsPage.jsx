import React, { Component } from 'react';
import Product from '../../components/Product/Product'

class DetailsPage extends Component {
    constructor(props) {
        super(props); 
        this.state = {

        } 
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="DetailsPage">
                <Product />
            </div>
        )
    }

}

export default DetailsPage;
