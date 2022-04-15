import React from 'react';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../Styles/Video.css';

const Video = ({ video: { _id, title, vidSrc, creator, creatorImg } }) => {
  const scrollToTop = (e) => {
    window.scrollTo(0);
  };

  return (
    <aside className='video-box flex-center flex-col align-start'>
      <Link
        to={`/video/${_id}`}
        className='video-img-container'
        onClick={scrollToTop}
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
          onClick={scrollToTop}
        >
          {title}
        </Link>
      </section>
      <section className='vid-controls flex-center justify-end'>
        <MdOutlineWatchLater className='icon' />
        <MdPlaylistAdd className='icon' />
      </section>
    </aside>
  );
};

export default Video;
