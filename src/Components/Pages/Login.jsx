import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';
import { useTheme } from '../Providers/ThemeProvider';
import { useWatchLater } from '../Providers/WatchLaterProvider';
import { useLiked } from '../Providers/LikedProvider';
import { useHistory } from '../Providers/HistoryProvider';
import { usePlaylists } from '../Providers/PlaylistsProvider';
import {
  sendLoginReq,
  getHistory,
  getLiked,
  getPlaylists,
  getWatchLaters,
} from '../Misc/requests';

const Login = () => {
  const { dispatchWatchLater } = useWatchLater();
  const { dispatchLiked } = useLiked();
  const { dispatchHistory } = useHistory();
  const { dispatchPlaylists } = usePlaylists();
  const { dispatchAuth } = useAuth();
  const { theme } = useTheme();
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
    getHistory().then((res) => {
      dispatchHistory({
        type: 'GET_HISTORY',
        payload: res,
      });
    });
    getWatchLaters().then((res) => {
      dispatchWatchLater({
        type: 'GET_WATCHLATERS',
        payload: res,
      });
    });
    getLiked().then((res) => {
      dispatchLiked({
        type: 'GET_LIKED',
        payload: res,
      });
    });
    getPlaylists().then((res) => {
      dispatchPlaylists({
        type: 'UPDATE_PLAYLISTS',
        payload: res,
      });
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
    getHistory().then((res) => {
      dispatchHistory({
        type: 'GET_HISTORY',
        payload: res,
      });
    });
    getWatchLaters().then((res) => {
      dispatchWatchLater({
        type: 'GET_WATCHLATERS',
        payload: res,
      });
    });
    getLiked().then((res) => {
      dispatchLiked({
        type: 'GET_LIKED',
        payload: res,
      });
    });
    getPlaylists().then((res) => {
      dispatchPlaylists({
        type: 'UPDATE_PLAYLISTS',
        payload: res,
      });
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
            } label ${theme === 'dark' ? 'light' : 'dark'}-color`}
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
            className={`${theme === 'dark' ? 'light' : 'dark'}-color`}
            required
          />
        </div>
        <div className='password'>
          <label
            className={`${
              password.length > 0 || focusedPassword ? 'shrink' : ''
            } label ${theme === 'dark' ? 'light' : 'dark'}-color`}
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
            className={`${theme === 'dark' ? 'light' : 'dark'}-color`}
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
