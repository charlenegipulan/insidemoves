import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = (props) => {
    let nav = props.user ? 
        <div>
        <Link to="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
        </div> :
    <div>
    <Link to='/login' className='NavBar-link'>LOG IN</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

    return(
        <div className='NavBar'>
            <div>
                <h3>Inside Moves</h3>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className="icons">
                <Link to='/checkout' className='NavBar-link'><i class="material-icons">&#xe8cc;</i></Link>&nbsp;
                <Link to='/login' className='NavBar-link'><i class="material-icons">&#9829;</i></Link> &nbsp;
                <Link to='/login' className='NavBar-link'><i class="material-icons">&#xe7fd;</i></Link>&nbsp;
            </div>
            <div className='NavBar-login'>
                {nav}
            </div>
        </div>
    );
};

export default NavBar;