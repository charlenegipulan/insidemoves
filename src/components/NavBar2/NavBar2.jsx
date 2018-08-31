import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar2.css';

const NavBar2 = (props) => {
    return(
        <div className='NavBar2'>
            <div><button className="category-button" onClick={() => props.handleUpdateFilterCategory('shoes')}>SHOES</button></div>
            <div><button className="category-button" onClick={() => props.handleUpdateFilterCategory('jerseys')}>JERSEYS</button></div>
        </div>
    );
};

export default NavBar2;