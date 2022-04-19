import React from 'react';
import '../Styles/Navbar.css';
import NavControls from './NavControls';
import { BsSunFill } from 'react-icons/bs';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';
import { removeAuth, removeUser } from '../Misc/localStorage';
import { successPopup } from '../Misc/toasts';

const Navbar = () => {
  const {
    authState: { userLoggedIn },
    dispatchAuth,
  } = useAuth();

  const logoutUser = (e) => {
    if (e.target.name === 'Logout') {
      removeAuth();
      removeUser();
      dispatchAuth({
        type: 'LOGGED_OUT',
      });
      successPopup('Logged Out successfully!');
      return <Navigate to='/login' />;
    }
  };

  return (
    <header className='header flex-center flex-col'>
      <nav className='navbar flex-center justify-between'>
        <div className='navbar-left'>
          <Link to='/'>
            <h1 className='h2 light-color'>Game❌Play</h1>
          </Link>
        </div>
        <div className='navbar-right flex-center'>
          <Link
            to='/login-signup'
            name={userLoggedIn ? 'Logout' : 'LogIn'}
            className='btn btn-login'
            onClick={logoutUser}
          >
            {userLoggedIn ? 'Logout' : 'LogIn'}
          </Link>
          <BsSunFill className='icon sun' />
        </div>
      </nav>
      <NavControls />
    </header>
  );
};

export default Navbar;
