import React, { useState, useEffect } from 'react';
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
      <section className='flex-center'>
        <CommentSection />
        <aside className='must-watch flex flex-col'>
          {videos &&
            videos.map((video, idx) => <Video key={idx} video={video} />)}
        </aside>
      </section>
    </main>
  );
};

export default VideoPage;
