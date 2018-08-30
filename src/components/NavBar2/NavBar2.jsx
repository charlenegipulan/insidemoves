import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar2.css';

const NavBar2 = (props) => {
    return(
        <div className='NavBar2'>
            <div><button onClick={() => props.filterByCategory('shoes')}>SHOES</button></div>
            <div><button onClick={() => props.filterByCategory('jerseys')}>JERSEYS</button></div>
        </div>
    );
};

export default NavBar2;