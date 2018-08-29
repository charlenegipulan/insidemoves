import React from 'react';
import './ProductList.css';
import Product from '../../components/Product/Product'

const ProductList = (props) => {
    return (
    <section className="ProductList">
    <h2>All Products</h2>
    <hr />
        <div className="ProductList-Products">
            {props.products.map(p => 
                <Product 
                    key={p.sku}
                    product={p} 
                    handleAddItem={props.handleAddItem}
                    handleSelectedProduct={props.handleSelectedProduct}
                />
            )}
        </div>
    </section>
    )
};

export default ProductList;
