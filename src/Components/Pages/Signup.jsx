import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../Providers/AuthProvider';
import { useTheme } from '../Providers/ThemeProvider';
import { errorPopup } from '../Misc/toasts';
import { sendSignupReq } from '../Misc/requests';
import { Navigate } from 'react-router-dom';

const Signup = () => {
  const { dispatchAuth } = useAuth();
  const { theme } = useTheme();
  const [goto, setGoto] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [focusedDisplayName, setFocusedDisplayName] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false);

  const { username, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    if (password === confirmPassword) {
      sendSignupReq({
        username,
        email,
        password,
      }).then((res) => {
        console.log(res);
        dispatchAuth({
          type: 'SIGNED_UP',
          payload: res === undefined ? null : res,
        });
        setGoto(res === undefined ? false : true);
      });
      setFormData({
        ...formData,
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } else {
      errorPopup('Passwords do not match!');
      setFormData({ ...formData, password: '', confirmPassword: '' });
    }
    e.preventDefault();
  };

  if (goto) {
    return <Navigate to='/' />;
  }

  return (
    <section className='sign-up'>
      <p className='h2'>I do not have an account</p>
      <span>Sign up with your email and password</span>
      <form className='auth-form' onSubmit={submitHandler}>
        <div className='username'>
          <label
            className={`${
              username.length > 0 || focusedDisplayName ? 'shrink' : ''
            } label ${theme === 'dark' ? 'light' : 'dark'}-color`}
          >
            Name
          </label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            onFocus={() => setFocusedDisplayName(true)}
            onBlur={() => setFocusedDisplayName(false)}
            className={`${theme === 'dark' ? 'light' : 'dark'}-color`}
            required
          />
        </div>

        <div className='email'>
          <label
            className={`${
              email.length > 0 || focusedEmail ? 'shrink' : ''
            } label ${theme === 'dark' ? 'light' : 'dark'}-color`}
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            onFocus={() => setFocusedEmail(true)}
            onBlur={() => setFocusedEmail(false)}
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
            min={7}
          />
        </div>
        <div className='confirm-password'>
          <label
            className={`${
              confirmPassword.length > 0 || focusedConfirmPassword
                ? 'shrink'
                : ''
            } label ${theme === 'dark' ? 'light' : 'dark'}-color`}
          >
            Confirm Password
          </label>
          <input
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            onFocus={() => setFocusedConfirmPassword(true)}
            onBlur={() => setFocusedConfirmPassword(false)}
            className={`${theme === 'dark' ? 'light' : 'dark'}-color`}
          />
        </div>
        <button className='btn btn-login-signup flex align-center justify-center'>
          Sign up
        </button>
      </form>
    </section>
  );
};

export default Signup;
