import React from 'react';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { VscHistory } from 'react-icons/vsc';
import '../Styles/EmptyPage.css';

const EmptyPage = ({ page }) => {
  return (
    <main className='empty-page flex-center'>
      {page === 'watchlater' ? (
        <MdOutlineWatchLater className='empty-image' />
      ) : page === 'history' ? (
        <VscHistory className='empty-image' />
      ) : (
        <MdPlaylistAdd className='empty-image' />
      )}
      {page === 'watchlater' ? (
        <p className='h1'>No videos added to {page} yet!</p>
      ) : page === 'history' ? (
        <p className='h1'>Start watching videos to add to your {page}!</p>
      ) : (
        <p className='h1'>You haven't created any {page} yet!</p>
      )}
    </main>
  );
};

export default EmptyPage;
