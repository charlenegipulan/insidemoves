import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import ShopButton from '../../components/ShopButton/ShopButton'

const LandingPage = (props) => {
    
    return (
        <div className="LandingPage">
            <header className="LandingPage-header">
                <Header />
            </header>
            <div>
                <ShopButton />
            </div>
        </div>
    )
}

export default LandingPage;
