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
                {/* <div>
                    <img src={product.img} alt={product.name} style={{width:450, height:300}}/>
                </div>
                <div>
                    <img src={product.img2} style={{width:120, height:80}} alt={product.name}/>
                    <img src={product.img3} style={{width:120, height:80}} alt={product.name}/>
                    <img src={product.img4} style={{width:120, height:80}} alt={product.name}/>
                    <img src={product.img5} style={{width:120, height:80}} alt={product.name}/>
                    <img src={product.img6} style={{width:120, height:80}} alt={product.name}/>
                </div> */}

                                {/* <div class="container"> */}

{/* <!-- main slider carousel --> */}
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
                    {/* <li class="list-inline-item active">
                        <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel">
                        <img src={product.img} alt={product.name} class="img-fluid"/>
                        </a>
                    </li> */}
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
                <a class="carousel-control left pt-3" href="#myCarousel" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
                    <a class="carousel-control right pt-3" href="#myCarousel" data-slide="next"><i class="fa fa-chevron-right"></i></a>
        </div>
    </div>

</div>
{/* <!--/main slider carousel--> */}
{/* </div> */}
            </div>
            <div className="DetailsPage-product-detail">
                <h1>{product.name}</h1>
                <hr/>
                <p>{product.description}</p>
                <p>{product.sku}</p>
                <p>{product.price}</p>
                {props.user ? <button onClick={() => props.handleAddItem(product._id)}> Add to Cart </button> : null}
                {props.user ?<button onClick={() => props.handleAddItemToFavorites(product._id)}> Add To Favorites </button>: null}
                {/* {props.user ? <button onClick={() => props.handleAddItem(product._id)}> Add to Cart </button> : null}
                {props.user ?<button onClick={() => props.handleAddItemToFavorites(product._id)}> Add To Favorites </button>: null} */}
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
        </div>
    );
  }
  
export default DetailsPage;
