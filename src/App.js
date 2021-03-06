import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo64.png';

class Login extends Component {

  render() {
    return(
      <div className='Login'>
         <h2>Welcome To Chat8740</h2>
         <div className="login-box">
            <h2>Login To Enter Room</h2>
            <input className="inp_username" placeholder='Username' />
            <input className="inp_pass" type='password' placeholder='Password'/>
            <button className="enter_button">Enter Room</button>
            <a href=''>Forget Password?</a>
         </div>

      </div>
    )
  }
}

const Header = () => {
  return (
      <div className="Header">
          <img src={logo} alt="" />
          <p className="Title">Chat8740</p>
          <button className="SignUp">Sign Up</button>
      </div>

  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;
