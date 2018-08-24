import React from 'react';
import { Link } from 'react-router-dom';

const ShopButton = (props) => {
  return (
    <div>
        <Link to="/shop" className="ShopButton">Shop Now</Link>
    </div>
  );
}

export default ShopButton;
