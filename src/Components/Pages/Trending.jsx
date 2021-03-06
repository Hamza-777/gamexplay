import React, { useEffect, useRef } from 'react';
import '../Styles/Trending.css';
import { useVideo } from '../Providers/VideoProvider';
import { useTheme } from '../Providers/ThemeProvider';
import Video from '../Utilities/Video';

const Trending = ({ searchQuery }) => {
  const activeFilter = useRef('all');
  const {
    videoState: { vids },
    videos,
    dispatchVideo,
  } = useVideo();
  const { theme } = useTheme();

  useEffect(() => {
    dispatchVideo({
      type: 'GET_ALL',
      payload: {
        videos,
      },
    });
  }, [videos, dispatchVideo]);

  const filterTrending = (e) => {
    activeFilter.current = e.target.name;
    e.target.name === 'all'
      ? dispatchVideo({
          type: 'GET_ALL',
          payload: {
            videos,
          },
        })
      : dispatchVideo({
          type: 'GET_SINGLE',
          payload: {
            videos,
            category: e.target.name,
          },
        });
  };

  return (
    <main className='container trending flex-center flex-col align-start'>
      <aside
        className={`filter-options filter-options-back-${
          theme === 'dark' ? '2' : 'd'
        } flex align-center`}
      >
        <button
          name='all'
          className={`btn btn-filter ${
            activeFilter.current === 'all' ? 'filter-active' : ''
          }`}
          onClick={filterTrending}
        >
          All
        </button>
        <button
          name='valorant'
          className={`btn btn-filter ${
            activeFilter.current === 'valorant' ? 'filter-active' : ''
          }`}
          onClick={filterTrending}
        >
          Valorant
        </button>
        <button
          name='fortnite'
          className={`btn btn-filter ${
            activeFilter.current === 'fortnite' ? 'filter-active' : ''
          }`}
          onClick={filterTrending}
        >
          Fortnite
        </button>
        <button
          name='csgo'
          className={`btn btn-filter ${
            activeFilter.current === 'csgo' ? 'filter-active' : ''
          }`}
          onClick={filterTrending}
        >
          CS:GO
        </button>
        <button
          name='lol'
          className={`btn btn-filter ${
            activeFilter.current === 'lol' ? 'filter-active' : ''
          }`}
          onClick={filterTrending}
        >
          LoL
        </button>
        <button
          name='minecraft'
          className={`btn btn-filter ${
            activeFilter.current === 'minecraft' ? 'filter-active' : ''
          }`}
          onClick={filterTrending}
        >
          Minecraft
        </button>
      </aside>
      <p className='h2'>Trending</p>
      <section className='trending-vids flex-center flex-row-wrap'>
        {vids &&
          vids.map((video) =>
            video.creator.toLowerCase().includes(searchQuery) ||
            video.title.toLowerCase().includes(searchQuery) ? (
              <Video video={video} />
            ) : (
              ''
            )
          )}
      </section>
    </main>
  );
};

export default Trending;
