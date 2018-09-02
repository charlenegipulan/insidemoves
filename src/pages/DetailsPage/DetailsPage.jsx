import React from 'react';
import NavBar2 from '../../components/NavBar2/NavBar2';
import Header from '../../components/Header/Header';
import './DetailsPage.css';
import {Link} from 'react-router-dom';

const DetailsPage = (props) => {
    var product = props.products && props.products.find(p => p._id === props.match.params.id);
    var view;
    if (product) {
        view = <React.Fragment>
            <div className="DetailsPage-content">
            <div className="DetailsPage-images">
<div class="row">
    <div id="slider">
            <div id="myCarousel" class="carousel slide">
                {/* <!-- main slider carousel items --> */}
                <div class="carousel-inner">
                    <div class="active item carousel-item" data-slide-number="0">
                        <img src={product.img} alt={product.name} class="img-fluid" style={{width:450, height:300}}/>
                    </div>
                    <div class="item carousel-item" data-slide-number="1">
                    <img src={product.img2} alt={product.name} class="img-fluid" style={{width:450, height:300}}/>
                    </div>
                    <div class="item carousel-item" data-slide-number="2">
                    <img src={product.img3} alt={product.name} class="img-fluid" style={{width:450, height:300}}/>
                    </div>
                    <div class="item carousel-item" data-slide-number="3">
                    <img src={product.img4} alt={product.name} class="img-fluid" style={{width:450, height:300}}/>
                    </div>
                    <div class="item carousel-item" data-slide-number="4">
                    <img src={product.img5} alt={product.name} class="img-fluid" style={{width:450, height:300}}/>
                    </div>
                    <div class="item carousel-item" data-slide-number="5">
                    <img src={product.img6} alt={product.name} class="img-fluid" style={{width:450, height:300}}/>
                    </div>



                </div>
                {/* <!-- main slider carousel nav controls --> */}

                <ul class="carousel-indicators list-inline">

                    <li class="list-inline-item">
                        <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel">
                        <img src={product.img2} alt={product.name} class="img-fluid" style={{width:120, height:80}}/>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a id="carousel-selector-3" data-slide-to="3" data-target="#myCarousel">
                        <img src={product.img3} alt={product.name} class="img-fluid" style={{width:120, height:80}}/>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a id="carousel-selector-4" data-slide-to="4" data-target="#myCarousel">
                        <img src={product.img4} alt={product.name} class="img-fluid" style={{width:120, height:80}}/>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a id="carousel-selector-5" data-slide-to="4" data-target="#myCarousel">
                        <img src={product.img5} alt={product.name} class="img-fluid" style={{width:120, height:80}}/>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a id="carousel-selector-6" data-slide-to="4" data-target="#myCarousel">
                        <img src={product.img6} alt={product.name} class="img-fluid" style={{width:120, height:80}}/>
                        </a>
                    </li>
                </ul>
                <div className="carousel-arrows">
                <a class="carousel-control left pt-3" href="#myCarousel" data-slide="prev"><i class="fa fa-chevron-left"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a class="carousel-control right pt-3" href="#myCarousel" data-slide="next"><i class="fa fa-chevron-right"></i></a>
                </div>
        </div>
    </div>

</div>
            </div>
            <div className="DetailsPage-product-detail">
                <h1>{product.name}</h1>
                <hr/>
                <p>{product.description}</p>
                <p>{product.sku}</p>
                <p>{product.price}</p>
                {props.user ? 
                    <button onClick={() => props.handleAddItem(product._id)}> Add to Cart </button> 
                    : 
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add to Cart</button>
                }
                {props.user ?
                    <button onClick={() => props.handleAddItemToFavorites(product._id)}> Add To Favorites </button>
                    :
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add to Favorites</button>
                }
            </div> 
            </div>
            </React.Fragment>
    } else {
        view = null;
    }

    return (
        <div className="DetailsPage">
            <div className="ShopPage-header">
                    <NavBar2 
                    handleUpdateFilterCategory={props.handleUpdateFilterCategory}/>
                    <Header />
            </div>
            {view}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        Please log In
                        </div>
                        <div class="modal-footer">
                        <button type="button" id="close" class="btn btn-danger" onClick={() => props.history.push('/login')} data-dismiss="modal" aria-label="Close">Log-In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

  
export default DetailsPage;
