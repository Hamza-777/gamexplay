import React from 'react';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../Styles/Video.css';

const VideoHorizontal = ({
  video: { _id, title, vidSrc, creator, creatorImg },
}) => {
  const scrollToTop = (e) => {
    window.scrollTo(0);
  };

  return (
    <aside className='video-box box-horizontal flex-center align-start'>
      <Link
        to={`/video/${_id}`}
        className='video-img-container'
        onClick={scrollToTop}
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
          onClick={scrollToTop}
        >
          {title}
        </Link>
        <div className='views'>1.2M views - 21st Jan 2020</div>
        <section className='vid-controls flex-center'>
          <MdOutlineWatchLater className='icon' />
          <MdPlaylistAdd className='icon' />
        </section>
      </article>
    </aside>
  );
};

export default VideoHorizontal;
