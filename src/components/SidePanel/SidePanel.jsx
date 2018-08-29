import React from 'react';
import './SidePanel.css';


const SidePanel = (props) => {

    return(
        <div className='SidePanel'>
            Find By:
            <hr/>
            <p className="Brand-text">&nbsp;&nbsp;Brand:</p>
            <p className="Brand-list-text">&nbsp;&nbsp;&nbsp;&nbsp;Nike</p>
            <p className="Brand-list-text">&nbsp;&nbsp;&nbsp;&nbsp;Jordans</p>
            <p className="Brand-list-text">&nbsp;&nbsp;&nbsp;&nbsp;Yeezy</p>
            <p className="Brand-list-text">&nbsp;&nbsp;&nbsp;&nbsp;Adidas</p>
            <p className="Brand-list-text">&nbsp;&nbsp;&nbsp;&nbsp;Vans</p>
            <br />
        </div>
    );
};

export default SidePanel;