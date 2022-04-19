import React from 'react';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { VscHistory } from 'react-icons/vsc';
import '../Styles/EmptyPage.css';

const EmptyPage = ({ page }) => {
  return (
    <main className='empty-page flex-center'>
      {page === 'watchlater' ? (
        <MdOutlineWatchLater className='empty-image' />
      ) : page === 'history' ? (
        <VscHistory className='empty-image' />
      ) : page === 'playlists' ? (
        <MdPlaylistAdd className='empty-image' />
      ) : (
        <AiOutlineLike className='empty-image' />
      )}
      {page === 'watchlater' ? (
        <p className='h1'>No videos added to {page} yet!</p>
      ) : page === 'history' ? (
        <p className='h1'>Start watching videos to add to your {page}!</p>
      ) : page === 'playlists' ? (
        <p className='h1'>You haven't created any {page} yet!</p>
      ) : (
        <p className='h1'>Videos you gave a thumbs up will be added here!</p>
      )}
    </main>
  );
};

export default EmptyPage;
