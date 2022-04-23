import React from 'react';
import { getUser, removeAuth, removeUser } from '../Misc/localStorage';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { AiOutlineLike, AiOutlineMail } from 'react-icons/ai';
import { VscHistory } from 'react-icons/vsc';
import { useHistory } from '../Providers/HistoryProvider';
import { useWatchLater } from '../Providers/WatchLaterProvider';
import { usePlaylists } from '../Providers/PlaylistsProvider';
import { useLiked } from '../Providers/LikedProvider';
import { useTheme } from '../Providers/ThemeProvider';
import { useAuth } from '../Providers/AuthProvider';
import { successPopup } from '../Misc/toasts';
import '../Styles/Profile.css';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const currentUser = getUser();
  const { username, email, createdAt } = currentUser;
  const { theme } = useTheme();
  const { dispatchAuth } = useAuth();
  const {
    historyState: { historyVideos },
  } = useHistory();
  const {
    watchLaterState: { watchlaterVideos },
  } = useWatchLater();
  const {
    playlistsState: { playlists },
  } = usePlaylists();
  const {
    likedState: { likedVideos },
  } = useLiked();

  const date = Date(createdAt).split(' ');
  let creationDate = date[0] + ' ' + date[2] + ' ' + date[1] + ' ' + date[3];

  const logoutUser = (e) => {
    removeAuth();
    removeUser();
    dispatchAuth({
      type: 'LOGGED_OUT',
    });
    successPopup('Logged Out successfully!', theme);
    return <Navigate to='/login' />;
  };

  return (
    <main className='container flex-center flex-col'>
      <div className='profile-top flex-center'>
        <div className='profile-top-left flex-center flex-col'>
          <img
            src='https://beinex.com/topics/wp-content/uploads/2021/09/5d711b8c-c82f-4ce9-a973-f6cdb87a8689.jpg'
            alt='avatar'
            className='profile-img'
          />
          <p className='h1'>{username}</p>
        </div>
        <div className='profile-info flex-center flex-col align-start'>
          <div className='flex-center profile-email'>
            <AiOutlineMail className='icon' />
            <p className='h4'>{email}</p>
          </div>
          <p className='h4'>Joined on {creationDate}</p>
          <button className='btn btn-outline' onClick={logoutUser}>
            LOGOUT
          </button>
        </div>
      </div>
      <hr className='hr' />
      <div className='profile-data flex-center flex-row-wrap'>
        <section className='icon-stat flex-center'>
          <AiOutlineLike className='icon' />
          <p className='h5'>{likedVideos.length}</p>
        </section>
        <section className='icon-stat flex-center'>
          <VscHistory className='icon' />
          <p className='h5'>{historyVideos.length}</p>
        </section>
        <section className='icon-stat flex-center'>
          <MdOutlineWatchLater className='icon' />
          <p className='h5'>{watchlaterVideos.length}</p>
        </section>
        <section className='icon-stat flex-center'>
          <MdPlaylistAdd className='icon' />
          <p className='h5'>{playlists.length}</p>
        </section>
      </div>
    </main>
  );
};

export default Profile;
