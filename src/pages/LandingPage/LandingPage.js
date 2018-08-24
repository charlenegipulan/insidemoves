import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Header from '../../components/Header/Header'

const LandingPage = (props) => {
    
    return (
        <div className="LandingPage">
            <header className="LandingPage-header">
                <Header />
            </header>
        </div>
    )
}

export default LandingPage;
