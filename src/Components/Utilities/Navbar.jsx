import React from 'react';
import '../Styles/Navbar.css';
import NavControls from './NavControls';
import { BsSunFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header flex-center flex-col'>
      <nav className='navbar flex-center justify-between'>
        <div className='navbar-left'>
          <Link to='/'>
            <h1 className='h2 light-color'>Game❌Play</h1>
          </Link>
        </div>
        <div className='navbar-right flex-center'>
          <Link to='/' className='btn btn-login'>
            Login
          </Link>
          <BsSunFill className='icon sun' />
        </div>
      </nav>
      <NavControls />
    </header>
  );
};

export default Navbar;
