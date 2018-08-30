import React, {Component} from 'react';
import Header from '../../components/Header/Header'
import NavBar2 from '../../components/NavBar2/NavBar2'
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignUpPage'>
        <NavBar2 />
        <Header />
        <SignUpForm
          {...this.props}
          updateMessage={this.updateMessage}
          handleSignup={this.props.handleSignup}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
};

export default SignupPage;