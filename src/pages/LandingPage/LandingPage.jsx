import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Header from '../../components/Header/Header'
import ShopButton from '../../components/ShopButton/ShopButton'
import LandingBanner from '../../components/LandingBanner/LandingBanner';

const LandingPage = (props) => {
    
    return (
        <div className="LandingPage">
            <header className="LandingPage-header">
                <Header />
            </header>
            <div>
                <LandingBanner />
                <ShopButton />
            </div>
        </div>
    )
}

export default LandingPage;
