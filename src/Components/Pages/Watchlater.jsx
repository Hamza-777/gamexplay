import React from 'react';
import EmptyPage from './EmptyPage';
import { useWatchLater } from '../Providers/WatchLaterProvider';
import Video from '../Utilities/Video';
import '../Styles/Watchlater.css';

const Watchlater = () => {
  const {
    watchLaterState: { watchlaterVideos },
  } = useWatchLater();

  return (
    <main className='container watchlater flex-center flex-col align-start'>
      <p className='h2'>Watchlater</p>
      {watchlaterVideos.length ? (
        <section className='watchlater-vids flex-center flex-row-wrap'>
          {watchlaterVideos &&
            watchlaterVideos.map((video) => (
              <Video key={video.id} video={video} />
            ))}
        </section>
      ) : (
        <EmptyPage page='watchlater' />
      )}
    </main>
  );
};

export default Watchlater;
