import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    return(
        <div>
            <Link to ={`/shop/${props.product._id}`} style={{ textDecoration: 'none' }}> 
            <article className="Product">
            <img src={props.product.img} alt={props.product.name} />
                 <div>
                    <h5> {props.product.name} </h5> <span class="shoe-desc">{props.product.description}</span>
                   <span class="price-text"> $&nbsp;{props.product.price} </span>
                </div>
                <div>
                    {/* <span>{props.product.sku}</span> */}
                    <button onClick={() => props.handleAddItem(props.product._id)} >ADD TO CART</button>
                </div>
            </article>
            </Link>
        </div>
    )
}

export default Product;