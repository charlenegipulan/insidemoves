import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import SidePanel from '../../components/SidePanel/SidePanel';
import NavBar2 from '../../components/NavBar2/NavBar2';
import Header from '../../components/Header/Header';
import productsAPI from '../../utils/productsAPI';
import './ShopPage.css';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            brandFilter: '',
            products: [],
            filteredProducts: []
        }
    }

    filterByBrand = (brand) => {
        this.setState({
            brandFilter: brand,
            filteredProducts: this.state.products.filter(p => p.brand.toLowerCase() === brand && p.name.toLowerCase().includes(this.state.filterText))
        });
    }

    updateFilter = (e) => {
        var text = e.target.value.toLowerCase();
        this.setState({
            filterText: text,
            filteredProducts: text ? this.state.products.filter(p => p.name.toLowerCase().includes(text)) : this.state.products
        });
    }

    componentDidMount() {
        productsAPI.index().then(products => {
            this.setState({products, filteredProducts: [...products]});
        });
    }

    render() {
        return (
            <div className="ShopPage">
                <div className="ShopPage-header">
                    <NavBar2 />
                    <Header />
                </div>
                <div className="ShopPage-content">
                    <div className="ShopPage-SidePanel">
                        <SidePanel 
                            products={this.state.filteredProducts}
                            filterByBrand={this.filterByBrand}
                        />
                    </div>
                    <div className="ShopPage-MainPanel">
                        <div>
                            <input value={this.state.filterText} onChange={(e) => this.updateFilter(e)} placeholder=" Search for a Product"/>
                        </div>
                        <div className="ShopPage-ProductList">
                        <ProductList 
                            products={this.state.filteredProducts}
                            handleAddItem={this.props.handleAddItem}
                            handleSelectedProduct={this.props.handleSelectedProduct}
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopPage;
