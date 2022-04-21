import React from 'react';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { addVideoToWatchLater, addToHistory } from '../Misc/requests';
import { useWatchLater } from '../Providers/WatchLaterProvider';
import { useHistory } from '../Providers/HistoryProvider';
import { useAuth } from '../Providers/AuthProvider';
import { useModal } from '../Providers/ModalProvider';
import '../Styles/Video.css';
import { infoPopup } from '../Misc/toasts';

const VideoHorizontal = ({ video }) => {
  const { dispatchWatchLater } = useWatchLater();
  const { dispatchHistory } = useHistory();
  const {
    authState: { userLoggedIn },
  } = useAuth();
  const { modalOpen, setModalOpen } = useModal();

  const { _id, title, vidSrc } = video;

  return (
    <aside className='video-box box-horizontal flex-center align-start'>
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
          className='video-img-horizontal'
        />
        <div className='fader flex-center'>
          <FiPlay className='play-icon' />
        </div>
      </Link>
      <article className='about-video flex flex-col'>
        <Link
          to={`/video/${_id}`}
          className='h6 vid-title light-color'
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
        <div className='views'>1.2M views - 21st Jan 2020</div>
        <section className='vid-controls flex-center'>
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
          <MdPlaylistAdd
            className='icon'
            onClick={(e) =>
              setModalOpen({ ...modalOpen, status: true, id: _id })
            }
          />
        </section>
      </article>
    </aside>
  );
};

export default VideoHorizontal;
