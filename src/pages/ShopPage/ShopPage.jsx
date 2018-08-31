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
            filterCategory: ''
        });
    }

    updateFilter = (e) => {
        var text = e.target.value.toLowerCase();
        this.setState({
            filterText: text,
        });
    }
    
    componentDidMount() {
        productsAPI.index().then(products => {
            this.setState({products, filteredProducts: [...products]});
        });
    }
    
    render() {
        var filteredProducts = this.state.products;
        if (this.state.brandFilter) filteredProducts = filteredProducts.filter(p => p.brand.toLowerCase() === this.state.brandFilter);
        if (this.state.filterText) filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(this.state.filterText));
        if (this.props.filterCategory) filteredProducts = filteredProducts.filter(p => p.category === this.props.filterCategory);
        return (
            <div className="ShopPage">
                <div className="ShopPage-header">
                    <Header />
                    <NavBar2 
                        handleUpdateFilterCategory={this.props.handleUpdateFilterCategory}
                    />
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
                            products={filteredProducts}
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
