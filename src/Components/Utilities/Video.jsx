import React from 'react';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { FiPlay } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import {
  addVideoToWatchLater,
  removeFromWatchLater,
  removeFromLiked,
  removeFromHistory,
  addToHistory,
} from '../Misc/requests';
import { useWatchLater } from '../Providers/WatchLaterProvider';
import { useLiked } from '../Providers/LikedProvider';
import { useHistory } from '../Providers/HistoryProvider';
import { useAuth } from '../Providers/AuthProvider';
import '../Styles/Video.css';
import { infoPopup } from '../Misc/toasts';

const Video = ({ video }) => {
  const location = useLocation().pathname;
  const { dispatchWatchLater } = useWatchLater();
  const { dispatchLiked } = useLiked();
  const { dispatchHistory } = useHistory();
  const {
    authState: { userLoggedIn },
  } = useAuth();

  const { _id, title, vidSrc, creator, creatorImg } = video;

  return (
    <aside className='video-box flex-center flex-col align-start'>
      <Link
        to={`/video/${_id}`}
        className='video-img-container'
        onClick={(e) => {
          userLoggedIn &&
            addToHistory({ video }).then((res) => {
              dispatchHistory({
                type: 'GET_HISTORY',
                payload: res,
              });
            });
        }}
      >
        <img
          src={`https://i.ytimg.com/vi/${vidSrc}/maxresdefault.jpg`}
          alt={title}
          className='video-img'
        />
        <div className='fader flex-center'>
          <FiPlay className='play-icon' />
        </div>
      </Link>
      <section className='video-info flex-center'>
        <img src={creatorImg} alt={creator} className='creator-img' />
        <Link
          to={`/video/${_id}`}
          className='h5 vid-title light-color'
          onClick={(e) => {
            userLoggedIn &&
              addToHistory({ video }).then((res) => {
                dispatchHistory({
                  type: 'GET_HISTORY',
                  payload: res,
                });
              });
          }}
        >
          {title}
        </Link>
      </section>
      <section className='vid-controls flex-center justify-end'>
        {location === '/liked' || location === '/history' ? (
          <button
            className='btn btn-remove'
            onClick={(e) => {
              location === '/liked'
                ? removeFromLiked(_id).then((res) => {
                    dispatchLiked({
                      type: 'GET_LIKED',
                      payload: res,
                    });
                  })
                : removeFromHistory(_id).then((res) => {
                    dispatchHistory({
                      type: 'GET_HISTORY',
                      payload: res,
                    });
                  });
            }}
          >
            Remove
          </button>
        ) : (
          ''
        )}
        {location === '/watchlater' ? (
          <button
            className='btn btn-remove'
            onClick={(e) => {
              removeFromWatchLater(_id).then((res) => {
                dispatchWatchLater({
                  type: 'GET_WATCHLATERS',
                  payload: res,
                });
              });
            }}
          >
            Remove
          </button>
        ) : (
          <MdOutlineWatchLater
            className='icon'
            onClick={(e) => {
              userLoggedIn
                ? addVideoToWatchLater({ video }).then((res) => {
                    dispatchWatchLater({
                      type: 'GET_WATCHLATERS',
                      payload: res,
                    });
                  })
                : infoPopup(
                    'Login or make an account to add videos to watchlater!'
                  );
            }}
          />
        )}
        <MdPlaylistAdd className='icon' />
      </section>
    </aside>
  );
};

export default Video;
