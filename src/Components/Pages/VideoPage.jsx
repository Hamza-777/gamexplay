import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useVideo } from '../Providers/VideoProvider';
import PageVideo from '../Utilities/PageVideo';
import '../Styles/VideoPage.css';
import CommentSection from '../Utilities/CommentSection';
import Video from '../Utilities/Video';

const VideoPage = () => {
  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const { videos } = useVideo();

  useEffect(() => {
    setCurrentVideo(videos.find((video) => video._id === videoId));
  }, [videoId, videos]);

  return (
    <main className='video-page container'>
      {currentVideo && <PageVideo currentVideo={currentVideo} />}
      <hr className='hr' />
      <section className='misc-container flex-center align-start'>
        <CommentSection />
        <aside className='must-watch flex flex-col'>
          <p className='h3'>Must Watch</p>
          {videos &&
            videos.map((video, idx) => (
              <Fragment key={idx}>
                <Video video={video} />
                <hr className='hr' />
              </Fragment>
            ))}
        </aside>
      </section>
    </main>
  );
};

export default VideoPage;
