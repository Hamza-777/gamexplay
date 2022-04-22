import React from 'react';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { VscHistory } from 'react-icons/vsc';
import { useTheme } from '../Providers/ThemeProvider';
import '../Styles/EmptyPage.css';

const EmptyPage = ({ page }) => {
  const { theme } = useTheme();

  return (
    <main
      className={`empty-page empty-page-back-${
        theme === 'dark' ? '2' : 'd'
      } flex-center`}
    >
      {page === 'watchlater' ? (
        <MdOutlineWatchLater className='empty-image' />
      ) : page === 'history' ? (
        <VscHistory className='empty-image' />
      ) : page === 'playlists' ? (
        <MdPlaylistAdd className='empty-image' />
      ) : page === 'liked' ? (
        <AiOutlineLike className='empty-image' />
      ) : (
        <MdPlaylistAdd className='empty-image' />
      )}
      {page === 'watchlater' ? (
        <p className='h1'>No videos added to {page} yet!</p>
      ) : page === 'history' ? (
        <p className='h1'>Start watching videos to add to your {page}!</p>
      ) : page === 'playlists' ? (
        <p className='h1'>You haven't created any {page} yet!</p>
      ) : page === 'liked' ? (
        <p className='h1'>Videos you gave a thumbs up will be added here!</p>
      ) : (
        <p className='h1'>You do not have any videos in this playlist!</p>
      )}
    </main>
  );
};

export default EmptyPage;
