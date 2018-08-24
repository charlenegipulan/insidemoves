import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = (props) => {
    return(
        <div className="NavBar">
                <p>This is my navbar</p>
                <Link to="/login" className="LogInButton">Log In</Link>
        </div>
    )
}

export default NavBar;