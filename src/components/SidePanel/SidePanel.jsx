import React from 'react';
import './SidePanel.css';


const SidePanel = (props) => {

    return(
        <div className='SidePanel'>
            Find By:
            <hr/>
            Brand <br/>
            <button className="brand-buttons" onClick={() => props.handleUpdateFilterBrand('nike')}> Nike </button><br/> 
            <button className="brand-buttons" onClick={() => props.handleUpdateFilterBrand('jordans')}> Jordans </button><br/>
            <button className="brand-buttons" onClick={() => props.handleUpdateFilterBrand('yeezy')}> Yeezy </button><br/>
            <button className="brand-buttons" onClick={() => props.handleUpdateFilterBrand('adidas')}> Adidas </button><br/>
            <button className="brand-buttons" onClick={() => props.handleUpdateFilterBrand('vans')}> Vans </button><br/>
            <br />
            <button className="brand-buttons" onClick={() => props.handleClearFilter()}> Clear Filters </button><br/>
        </div>
    );
};

export default SidePanel;