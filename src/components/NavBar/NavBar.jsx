import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

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
                <Link to='/'> <span className="inside-text">Inside</span> <span className="moves-text">Moves</span></Link>
            </div>
            <div className="right-nav-content">
                <div className="icons">
                    <Link to='/checkout' className='NavBar-link'><img src={'https://i.imgur.com/x0mEKHN.png'} alt="icon"></img></Link>&nbsp;
                    <Link to='/favorites' className='NavBar-link'><img src={'https://i.imgur.com/va5Co1O.png'} alt="icon"></img></Link> &nbsp;
                    <Link to='/login' className='NavBar-link'><img src={'https://i.imgur.com/sPPabG2.png'} alt="icon"></img></Link>&nbsp;
                </div>
                <div className="NavBar-login">
                <p>{nav} </p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;