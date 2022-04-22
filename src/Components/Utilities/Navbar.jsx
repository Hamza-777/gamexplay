import React from 'react';
import '../Styles/Navbar.css';
import NavControls from './NavControls';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { Link, Navigate } from 'react-router-dom';
import { useTheme } from '../Providers/ThemeProvider';
import { useAuth } from '../Providers/AuthProvider';
import { removeAuth, removeUser } from '../Misc/localStorage';
import { successPopup } from '../Misc/toasts';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
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
      successPopup('Logged Out successfully!', theme);
      return <Navigate to='/login' />;
    }
  };

  return (
    <header className='header flex-center flex-col'>
      <nav className='navbar flex-center justify-between'>
        <div className='navbar-left'>
          <Link to='/'>
            <h1 className={`h2 ${theme === 'dark' ? 'light' : 'dark'}-color`}>
              Game❌Play
            </h1>
          </Link>
        </div>
        <div className='navbar-right flex-center'>
          <Link
            to='/login-signup'
            name={userLoggedIn ? 'Logout' : 'LogIn'}
            className='btn btn-outline'
            onClick={logoutUser}
          >
            {userLoggedIn ? 'Logout' : 'LogIn'}
          </Link>
          {theme === 'dark' ? (
            <BsSunFill className='icon' onClick={(e) => setTheme('light')} />
          ) : (
            <BsMoonFill className='icon' onClick={(e) => setTheme('dark')} />
          )}
        </div>
      </nav>
      <NavControls />
    </header>
  );
};

export default Navbar;
