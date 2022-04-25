import React from 'react';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { useWatchLater } from '../Providers/WatchLaterProvider';
import { useLiked } from '../Providers/LikedProvider';
import { useAuth } from '../Providers/AuthProvider';
import { useModal } from '../Providers/ModalProvider';
import { useTheme } from '../Providers/ThemeProvider';
import {
  addVideoToWatchLater,
  addToLiked,
  removeFromLiked,
} from '../Misc/requests';
import { infoPopup } from '../Misc/toasts';

const PageVideo = ({ currentVideo }) => {
  const { dispatchWatchLater } = useWatchLater();
  const { dispatchLiked } = useLiked();
  const {
    authState: { userLoggedIn },
  } = useAuth();
  const { theme } = useTheme();
  const { modalOpen, setModalOpen } = useModal();

  const { _id, title, vidSrc, creator, creatorImg } = currentVideo;

  return (
    <section className='video-container flex flex-col align-start justify-center'>
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${vidSrc}?&autoplay=0`}
        frameBorder='0'
        controls='0'
        fs='0'
        className='video'
      ></iframe>
      <p className='h4'>{title}</p>
      <aside className='videopage-controls flex-center justify-between'>
        <div className='controls-left flex-center'>
          1.2M views - 21st Jan 2020
        </div>
        <div className='controls-right flex-center'>
          <div className='grp flex-center'>
            <AiOutlineLike
              className='icon'
              onClick={(e) => {
                userLoggedIn
                  ? addToLiked({ video: currentVideo }).then((res) => {
                      dispatchLiked({
                        type: 'GET_LIKED',
                        payload: res,
                      });
                    })
                  : infoPopup(
                      'Login or create an account to like/unlike videos!',
                      theme
                    );
              }}
            />
            <p className='h6'>100K</p>
          </div>
          {'|'}
          <AiOutlineDislike
            className='icon'
            onClick={(e) => {
              userLoggedIn
                ? removeFromLiked(_id).then((res) => {
                    dispatchLiked({
                      type: 'GET_LIKED',
                      payload: res,
                    });
                  })
                : infoPopup(
                    'Login or create an account to like/unlike videos!',
                    theme
                  );
            }}
          />
          {'|'}
          <MdOutlineWatchLater
            className='icon'
            onClick={(e) => {
              userLoggedIn
                ? addVideoToWatchLater({ video: currentVideo }).then((res) => {
                    dispatchWatchLater({
                      type: 'GET_WATCHLATERS',
                      payload: res,
                    });
                  })
                : infoPopup(
                    'Login or make an account to add videos to watchlater!',
                    theme
                  );
            }}
          />
          {'|'}
          <MdPlaylistAdd
            className='icon'
            onClick={(e) =>
              setModalOpen({ ...modalOpen, status: true, id: _id })
            }
          />
        </div>
      </aside>
      <hr className='hr' />
      <div className='channel-details flex-center'>
        <img src={creatorImg} alt={creator} className='channel-logo' />
        <aside className='flex flex-col'>
          <p className='channel-name h5'>{creator}</p>
          <p className='h6'>876K Subscribers</p>
        </aside>
      </div>
    </section>
  );
};

export default PageVideo;
