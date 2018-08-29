import React, { Component } from 'react';

const DetailsPage = (props) => {
    return (
      <div className="DetailsPage">
        <h1>{props.product.name}</h1>
        <p>{props.product.description}</p>
        <button onClick={() => props.handleAddItem(props.product._id)}> ADD TO CART </button>
      </div>
    )
  }
  
export default DetailsPage;
