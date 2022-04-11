import React from 'react';
import '../Styles/VideoList.css';
import Video from './Video';

const VideoList = ({ videos }) => {
  return (
    <section className='video-list flex align-center'>
      {videos && videos.map((video) => <Video video={video} />)}
    </section>
  );
};

export default VideoList;
