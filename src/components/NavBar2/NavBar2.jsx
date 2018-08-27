import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import './NavBar2.css';

const NavBar2 = (props) => {
    return(
        <div className='NavBar2'>
            <SearchBar /> <Link to='/checkout' className='NavBar-link'>Cart</Link>
        </div>
    );
};

export default NavBar2;