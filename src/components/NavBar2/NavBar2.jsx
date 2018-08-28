import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import './NavBar2.css';
import Cart from '../../components/Cart/Cart';

const NavBar2 = (props) => {
    return(
        <div className='NavBar2'>
            <div>SHOES</div>
            <div>JERSEYS</div>
        </div>
    );
};

export default NavBar2;