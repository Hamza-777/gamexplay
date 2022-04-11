import React from 'react';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';
import '../Styles/Video.css';

const Video = ({ video: { title, vidSrc } }) => {
  return (
    <aside className='video-box flex-center flex-col align-start'>
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${vidSrc}?&autoplay=0`}
        frameborder='0'
        controls='0'
        fs='0'
        className='video'
      ></iframe>
      <p className='h5 vid-title'>{title}</p>
      <section className='vid-controls flex-center justify-end'>
        <MdOutlineWatchLater className='icon' />
        <MdPlaylistAdd className='icon' />
      </section>
    </aside>
  );
};

export default Video;
