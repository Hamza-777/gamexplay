import React, { useState } from 'react';
import { IoIosTrendingUp } from 'react-icons/io';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { VscHistory, VscHome } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useTheme } from '../Providers/ThemeProvider';
import '../Styles/NavControls.css';

const NavControls = () => {
  const { theme } = useTheme();
  const [activeControl, setActiveControl] = useState('home');

  return (
    <section className='controls flex-center'>
      <Link to='/'>
        <VscHome
          className={`icon ${theme === 'dark' ? 'light' : 'dark'}-color ${
            activeControl === 'home' ? 'active-control' : ''
          }`}
          onClick={(e) => setActiveControl('home')}
        />
      </Link>
      <Link to='/trending'>
        <IoIosTrendingUp
          className={`icon ${theme === 'dark' ? 'light' : 'dark'}-color ${
            activeControl === 'trending' ? 'active-control' : ''
          }`}
          onClick={(e) => setActiveControl('trending')}
        />
      </Link>
      <Link to='/liked'>
        <AiOutlineLike
          className={`icon ${theme === 'dark' ? 'light' : 'dark'}-color ${
            activeControl === 'liked' ? 'active-control' : ''
          }`}
          onClick={(e) => setActiveControl('liked')}
        />
      </Link>
      <Link to='/watchlater'>
        <MdOutlineWatchLater
          className={`icon ${theme === 'dark' ? 'light' : 'dark'}-color ${
            activeControl === 'watchlater' ? 'active-control' : ''
          }`}
          onClick={(e) => {
            setActiveControl('watchlater');
          }}
        />
      </Link>
      <Link to='/history'>
        <VscHistory
          className={`icon ${theme === 'dark' ? 'light' : 'dark'}-color ${
            activeControl === 'history' ? 'active-control' : ''
          }`}
          onClick={(e) => {
            setActiveControl('history');
          }}
        />
      </Link>
      <Link to='/playlists'>
        <MdPlaylistAdd
          className={`icon ${theme === 'dark' ? 'light' : 'dark'}-color ${
            activeControl === 'playlist' ? 'active-control' : ''
          }`}
          onClick={(e) => {
            setActiveControl('playlist');
          }}
        />
      </Link>
    </section>
  );
};

export default NavControls;
