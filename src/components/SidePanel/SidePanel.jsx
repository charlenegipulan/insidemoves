import React from 'react';
import './SidePanel.css';


const SidePanel = (props) => {

    return(
        <div className='SidePanel'>
            Find By:
            <hr/>
            Brand <br/>
            &nbsp;&nbsp;&nbsp;<button className="brand-buttons" onClick={() => props.handleUpdateFilterBrand('nike')}> Nike </button><br/>
            &nbsp;&nbsp;&nbsp;<button className="brand-buttons" onClick={() => props.handleUpdateFilterBrand('jordans')}> Jordans </button><br/>
            &nbsp;&nbsp;&nbsp;<button className="brand-buttons" onClick={() => props.handleUpdateFilterBrand('yeezy')}> Yeezy </button><br/>
            &nbsp;&nbsp;&nbsp;<button className="brand-buttons" onClick={() => props.handleUpdateFilterBrand('adidas')}> Adidas </button><br/>
            &nbsp;&nbsp;&nbsp;<button className="brand-buttons" onClick={() => props.handleUpdateFilterBrand('vans')}> Vans </button><br/>
            <br />
        </div>
    );
};

export default SidePanel;