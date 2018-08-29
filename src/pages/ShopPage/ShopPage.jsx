import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import SidePanel from '../../components/SidePanel/SidePanel';
import productsAPI from '../../utils/productsAPI';
import './ShopPage.css';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        productsAPI.index().then(products => {
            this.setState({products})
        });
    }

    render() {
        return (
            <div className="ShopPage">
                <SidePanel />
                    <ProductList 
                        products={this.state.products}
                        handleAddItem={this.props.handleAddItem}
                    />
            </div>
        )
    }
}

export default ShopPage;
