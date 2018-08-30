import React from 'react';
import NavBar2 from '../../components/NavBar2/NavBar2';
import Header from '../../components/Header/Header';
import './DetailsPage.css';

const DetailsPage = (props) => {
    var product = props.products && props.products.find(p => p._id === props.match.params.id);
    var view;
    if (product) {
        view = <React.Fragment>
            <div className="DetailsPage-content">
            <div className="DetailsPage-images">
                <div>
                    <img src={product.img} alt={product.name} style={{width:450, height:350}}/>
                </div>
                <div>
                    <img src={product.img2} style={{width:120, height:100}} alt={product.name}/>
                    <img src={product.img3} style={{width:120, height:100}} alt={product.name}/>
                    <img src={product.img4} style={{width:120, height:100}} alt={product.name}/>
                    <img src={product.img5} style={{width:120, height:100}} alt={product.name}/>
                    <img src={product.img6} style={{width:120, height:100}} alt={product.name}/>
                </div>
            </div>
            <div className="DetailsPage-product-detail">
                <h1>{product.name}</h1>
                <hr/>
                <p>{product.description}</p>
                <p>{product.sku}</p>
                <p>{product.price}</p>
                <button onClick={() => props.handleAddItem(product._id)}> Add to Cart </button>
                <button onClick={() => props.handleAddItemToFavorites(product._id)}> Add To Favorites </button>
            </div>
            </div>
            </React.Fragment>
    } else {
        view = null;
    }

    return (
        <div className="DetailsPage">
            <div className="ShopPage-header">
                    <NavBar2 />
                    <Header />
            </div>
        {view}
        </div>
    );
  }
  
export default DetailsPage;
