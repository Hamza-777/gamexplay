import React from 'react';
import '../Styles/Navbar.css';
import { BsSunFill } from 'react-icons/bs';
import { IoIosTrendingUp } from 'react-icons/io';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { VscHistory, VscHome } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header flex-center flex-col'>
      <nav className='navbar flex-center justify-between'>
        <div className='navbar-left'>
          <Link to='/'>
            <h1 className='h2'>Game❌Play</h1>
          </Link>
        </div>
        <div className='navbar-right'>
          <BsSunFill className='icon sun' />
        </div>
      </nav>
      <section className='controls flex-center'>
        <VscHome className='icon active-control' />
        <IoIosTrendingUp className='icon' />
        <MdOutlineWatchLater className='icon' />
        <VscHistory className='icon' />
        <MdPlaylistAdd className='icon' />
      </section>
    </header>
  );
};

export default Navbar;
