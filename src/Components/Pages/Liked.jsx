import React from 'react';
import EmptyPage from './EmptyPage';
import { useLiked } from '../Providers/LikedProvider';
import Video from '../Utilities/Video';
import '../Styles/Liked.css';

const Liked = () => {
  const {
    likedState: { likedVideos },
  } = useLiked();

  return (
    <main className='container liked flex-center flex-col align-start'>
      <p className='h2'>Liked</p>
      {likedVideos.length ? (
        <section className='liked-vids flex-center flex-row-wrap'>
          {likedVideos &&
            likedVideos.map((video) => <Video key={video._id} video={video} />)}
        </section>
      ) : (
        <EmptyPage page='liked' />
      )}
    </main>
  );
};

export default Liked;
