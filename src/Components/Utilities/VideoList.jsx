import React from 'react';
import '../Styles/VideoList.css';
import { MdOutlineWatchLater, MdPlaylistAdd } from 'react-icons/md';

const VideoList = ({ videos }) => {
  return (
    <section className='video-list flex align-center'>
      {videos &&
        videos.map((video) => (
          <aside className='video-box flex-center flex-col align-start'>
            <iframe
              title={video.title}
              src={`https://www.youtube.com/embed/${video.vidSrc}?&autoplay=0`}
              frameborder='0'
              controls='0'
              fs='0'
              className='video'
            ></iframe>
            <p className='h4 vid-title'>{video.title}</p>
            <section className='vid-controls flex-center justify-end'>
              <MdOutlineWatchLater className='icon' />
              <MdPlaylistAdd className='icon' />
            </section>
          </aside>
        ))}
    </section>
  );
};

export default VideoList;
