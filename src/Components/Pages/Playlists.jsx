import React from 'react';
import EmptyPage from './EmptyPage';
import { usePlaylists } from '../Providers/PlaylistsProvider';
import { useModal } from '../Providers/ModalProvider';
import '../Styles/Playlists.css';
import { Link } from 'react-router-dom';

const Playlists = () => {
  const {
    playlistsState: { playlists },
  } = usePlaylists();
  const { modalOpen, setModalOpen } = useModal();

  return (
    <main className='container playlists flex-center flex-col align-start'>
      <section className='playlists-head flex-center justify-between'>
        <p className='h2'>Playlists</p>
        <button
          className='btn btn-outline'
          onClick={(e) =>
            setModalOpen({ ...modalOpen, status: true, id: 'null' })
          }
        >
          + Create New
        </button>
      </section>
      {playlists.length ? (
        <section className='playlists-all flex-center flex-row-wrap'>
          {playlists.map((playlist) => (
            <Link
              to={`/playlists/${playlist._id}`}
              key={playlist._id}
              className='playlist-item flex flex-col light-color'
            >
              <p className='h5 title'>{playlist.title}</p>
              <p className='description'>{playlist.description}</p>
              <p className='no-of-videos'>
                {playlist.videos.length}{' '}
                {playlist.videos.length === 1 ? 'video' : 'videos'}
              </p>
            </Link>
          ))}
        </section>
      ) : (
        <EmptyPage page='playlists' />
      )}
    </main>
  );
};

export default Playlists;
