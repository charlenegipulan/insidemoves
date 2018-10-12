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
            <br />
            Team <br/>
            <button className="team-buttons">Lakers </button><br/>
            <button className="team-buttons">Rockets </button><br/>
            <button className="team-buttons">Golden State </button><br/>
            <button className="team-buttons">Timberwolves </button><br/>
            <button className="team-buttons">Clippers </button><br/>
            <br/>
            <button className="brand-buttons" onClick={() => props.handleClearFilter()}> Clear Filters </button><br/>
        </div>
    );
};

export default SidePanel;