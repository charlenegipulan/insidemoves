import React from 'react';
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import LoginForm from '../../components/LogInForm/LogInForm';

const LogInPage = (props) => {
    return (
        <div className="LogInPage">
            <header className="LogInPage-header">
                <Header />
                <NavBar />
            </header>
            <div>
                <LoginForm 
                    handleLogin={props.handleLogin}
                    {...props}
                />
            </div>
        </div>
    )
}

export default LogInPage;
