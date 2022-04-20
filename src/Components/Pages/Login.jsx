import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';
import { sendLoginReq } from '../Misc/requests';

const Login = () => {
  const { dispatchAuth } = useAuth();
  const [goto, setGoto] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [focusedInput, setFocusedInput] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    sendLoginReq({
      email,
      password,
    }).then((res) => {
      dispatchAuth({
        type: 'LOGGED_IN',
        payload: res === undefined ? null : res,
      });
      setGoto(res === undefined ? false : true);
    });
    setFormData({ ...formData, email: '', password: '' });
    e.preventDefault();
  };

  const guestLogin = (e) => {
    sendLoginReq({
      email: 'guest@gmail.com',
      password: 'guest123',
    }).then((res) => {
      dispatchAuth({
        type: 'LOGGED_IN',
        payload: res === undefined ? null : res,
      });
      setGoto(res === undefined ? false : true);
    });
  };

  if (goto) {
    return <Navigate to='/' />;
  }

  return (
    <section className='sign-in'>
      <p className='h2'>I already have an account</p>
      <span>Sign in with your email and password</span>
      <form className='auth-form' onSubmit={submitHandler}>
        <div className='email'>
          <label
            className={`${
              email.length > 0 || focusedInput ? 'shrink' : ''
            } label light-color`}
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            onFocus={() => setFocusedInput(true)}
            onBlur={() => setFocusedInput(false)}
            className='light-color'
            required
          />
        </div>
        <div className='password'>
          <label
            className={`${
              password.length > 0 || focusedPassword ? 'shrink' : ''
            } label light-color`}
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            onFocus={() => setFocusedPassword(true)}
            onBlur={() => setFocusedPassword(false)}
            className='light-color'
          />
        </div>
        <button className='btn btn-login-signup flex align-center justify-center'>
          Log In
        </button>
      </form>
      <div className='or flex-center'>
        <hr className='hr' />
        <p className='h6'>or</p>
        <hr className='hr' />
      </div>
      <button
        className='btn btn-login-signup flex align-center justify-center'
        onClick={guestLogin}
      >
        LogIn as a guest
      </button>
    </section>
  );
};

export default Login;
