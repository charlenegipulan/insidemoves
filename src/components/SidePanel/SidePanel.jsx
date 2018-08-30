import React from 'react';
import './SidePanel.css';


const SidePanel = (props) => {

    return(
        <div className='SidePanel'>
            Find By:
            <hr/>
            Brand <br/>
            &nbsp;&nbsp;&nbsp;<button className="brand-buttons" onClick={() => props.filterByBrand('nike')}> Nike </button><br/>
            &nbsp;&nbsp;&nbsp;<button className="brand-buttons" onClick={() => props.filterByBrand('jordans')}> Jordans </button><br/>
            &nbsp;&nbsp;&nbsp;<button className="brand-buttons" onClick={() => props.filterByBrand('yeezy')}> Yeezy </button><br/>
            &nbsp;&nbsp;&nbsp;<button className="brand-buttons" onClick={() => props.filterByBrand('adidas')}> Adidas </button><br/>
            &nbsp;&nbsp;&nbsp;<button className="brand-buttons" onClick={() => props.filterByBrand('vans')}> Vans </button><br/>
            <br />
        </div>
    );
};

export default SidePanel;