import React from 'react';
import EmptyPage from './EmptyPage';
import '../Styles/Playlists.css';

const Playlists = () => {
  return (
    <main className='container playlists flex-center flex-col align-start'>
      <p className='h2'>Playlists</p>
      <EmptyPage page='playlists' />
    </main>
  );
};

export default Playlists;
