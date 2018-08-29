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
                <Link to='/'> <span class="inside-text">Inside</span> <span class="moves-text">Moves</span></Link>
            </div>
            <div className="right-nav-content">
                <div className="icons">
                    <Link to='/login' className='NavBar-link'><img src={'https://i.imgur.com/va5Co1O.png'}></img></Link> &nbsp;
                    <Link to='/checkout' className='NavBar-link'><img src={'https://i.imgur.com/x0mEKHN.png'}></img></Link>&nbsp;
                    <Link to='/login' className='NavBar-link'><img src={'https://i.imgur.com/sPPabG2.png'}></img></Link>&nbsp;
                </div>
                <div className="NavBar-login">
                <p>{nav} </p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;