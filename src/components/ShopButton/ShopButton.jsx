import React from 'react';
import { Link } from 'react-router-dom';
import './ShopButton.css';

const ShopButton = (props) => {
  return (
    <div>
        <Link to="/shop" className="ShopButton">Shop all</Link>
    </div>
  );
}

export default ShopButton;
