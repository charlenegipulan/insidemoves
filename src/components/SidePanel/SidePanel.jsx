import React from 'react';
import './SidePanel.css';


const SidePanel = (props) => {

    return(
        <div className='SidePanel'>
            Find By:
            <hr/>
            &nbsp;&nbsp;Brand:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Nike<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Jordans<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Yeezy<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Adidas<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Vans<br />
            <br />
        </div>
    );
};

export default SidePanel;