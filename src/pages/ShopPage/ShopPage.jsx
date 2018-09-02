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
            filterCategory: '',
            products: [],
            filteredProducts: []
        }
    }

    updateFilter = (e) => {
        var text = e.target.value.toLowerCase();
        this.setState({
            brandFilter: '',
            filterCategory: '',
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
            if (this.props.brandFilter) filteredProducts = filteredProducts.filter(p => p.brand.toLowerCase() === this.props.brandFilter);
            if (this.state.filterText) filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(this.state.filterText));
            if (this.props.filterCategory) filteredProducts = filteredProducts.filter(p => p.category === this.props.filterCategory);
        return (
            <div className="ShopPage">
                <div className="ShopPage-header">
                    <NavBar2 
                        products={this.state.filteredProducts}
                        handleUpdateFilterCategory={this.props.handleUpdateFilterCategory}
                    />
                    <Header />
                </div>
                <div className="ShopPage-content">
                    <div className="ShopPage-SidePanel">
                        <SidePanel 
                            products={this.state.filteredProducts}
                            handleUpdateFilterBrand={this.props.handleUpdateFilterBrand}
                            handleClearFilter={this.props.handleClearFilter}
                            filteredProducts={this.state.filteredProducts}
                            brandFilter={this.state.brandFilter}
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
