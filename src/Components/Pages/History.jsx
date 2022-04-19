import React from 'react';
import EmptyPage from './EmptyPage';
import { useHistory } from '../Providers/HistoryProvider';
import Video from '../Utilities/Video';
import '../Styles/History.css';

const History = () => {
  const {
    historyState: { historyVideos },
  } = useHistory();

  return (
    <main className='container history flex-center flex-col align-start'>
      <p className='h2'>History</p>
      {historyVideos.length ? (
        <section className='history-vids flex-center flex-row-wrap'>
          {historyVideos &&
            historyVideos.map((video) => (
              <Video key={video._id} video={video} />
            ))}
        </section>
      ) : (
        <EmptyPage page='history' />
      )}
    </main>
  );
};

export default History;
