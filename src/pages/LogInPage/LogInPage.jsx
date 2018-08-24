import React from 'react';
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'

const LogInPage = (props) => {
    
    return (
        <div className="LogInPage">
            <header className="LogInPage-header">
                <Header />
                <NavBar />
            </header>
        </div>
    )
}

export default LogInPage;
