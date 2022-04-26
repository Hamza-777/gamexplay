import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePlaylists } from '../Providers/PlaylistsProvider';
import Video from '../Utilities/Video';
import EmptyPage from './EmptyPage';
import '../Styles/Playlists.css';

const Playlist = () => {
  const { playlistId } = useParams();
  const {
    playlistsState: { playlists },
  } = usePlaylists();
  const [currentPlaylist, setCurrentPlaylist] = useState(null);

  useEffect(() => {
    setCurrentPlaylist(
      playlists.filter((playlist) => playlist._id === playlistId)[0]
    );
  }, [playlistId, playlists]);

  return (
    <main className='container playlists flex-center flex-col align-start'>
      <section className='playlists-head flex-center justify-between'>
        <p className='h2'>
          Playlist {`/ ${currentPlaylist && currentPlaylist.title}`}
        </p>
        <Link to='/playlists' className='btn btn-outline'>
          Back
        </Link>
      </section>
      <p className='h3'>
        {`Description > ${currentPlaylist && currentPlaylist.description}`}
      </p>
      {currentPlaylist && currentPlaylist.videos.length ? (
        <section className='playlist-vids flex-center flex-row-wrap'>
          {currentPlaylist.videos.map((video) => (
            <Video key={video._id} video={video} />
          ))}
        </section>
      ) : (
        <EmptyPage page='playlist' />
      )}
    </main>
  );
};

export default Playlist;
