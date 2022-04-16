import React from 'react';
import Login from './Login';
import Signup from './Signup';
import '../Styles/LoginSignup.css';

const LoginSignup = () => {
  return (
    <main className='container sign-in-and-sign-up flex-center align-start'>
      <Login />
      <Signup />
    </main>
  );
};

export default LoginSignup;
