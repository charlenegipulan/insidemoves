import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    return(
        <div className="Product">
            <Link to ={`/shop/${props.product._id}`} > 
            <article className="Product" onClick={() => props.handleSelectedProduct(props.product)}>
            <img src={props.product.img} alt={props.product.name} />
                 <div>
                    <h5> {props.product.name} </h5> <span class="shoe-desc">{props.product.description}</span>
                   <span class="price-text"> $&nbsp;{props.product.price} </span>
                </div>
            </article>
            </Link>
        </div>
    )
}

export default Product;