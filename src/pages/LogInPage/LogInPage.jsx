import React from 'react';
import Header from '../../components/Header/Header'
import NavBar2 from '../../components/NavBar2/NavBar2'
import LoginForm from '../../components/LogInForm/LogInForm';

const LogInPage = (props) => {
    return (
        <div className="LogInPage">
            <div>
                <NavBar2 />
                <Header />
                    <h3 className="LoginPageMessage">{props.location.message}</h3>
                <LoginForm 
                    handleLogin={props.handleLogin}
                    {...props}
                />
            </div>
        </div>
    )
}

export default LogInPage;
