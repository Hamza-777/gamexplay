import React from 'react';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../Styles/Video.css';

const Video = ({ video: { _id, title, vidSrc, creator, creatorImg } }) => {
  return (
    <aside className='video-box flex-center flex-col align-start'>
      <Link to={`/video/${_id}`} className='video-img-container'>
        <img
          src={`https://i.ytimg.com/vi/${vidSrc}/maxresdefault.jpg`}
          alt={title}
          className='video-img'
        />
        <div className='fader flex-center'>
          <FiPlay className='play-icon' />
        </div>
      </Link>
      {/* <iframe
        title={title}
        src={`https://www.youtube.com/embed/${vidSrc}?&autoplay=0`}
        frameBorder='0'
        controls='0'
        fs='0'
        className='video'
      ></iframe> */}
      <section className='video-info flex-center'>
        <img src={creatorImg} alt={creator} className='creator-img' />
        <Link to={`/video/${_id}`} className='h5 vid-title light-color'>
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
