import React from 'react';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { FcLike, FcDislike } from 'react-icons/fc';

const PageVideo = ({
  currentVideo: { title, vidSrc, creator, creatorImg },
}) => {
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
          1.2M views | 21st Jan 2020
        </div>
        <div className='controls-right flex-center'>
          <FcLike className='icon' />
          <FcDislike className='icon' />
          <MdOutlineWatchLater className='icon' />
          <MdPlaylistAdd className='icon' />
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
