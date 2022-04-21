import React from 'react';
import EmptyPage from './EmptyPage';
import { usePlaylists } from '../Providers/PlaylistsProvider';
import { useModal } from '../Providers/ModalProvider';
import { MdDeleteOutline } from 'react-icons/md';
import '../Styles/Playlists.css';
import { Link } from 'react-router-dom';
import { deletePlaylist } from '../Misc/requests';

const Playlists = () => {
  const {
    playlistsState: { playlists },
    dispatchPlaylists,
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
            <div key={playlist._id} className='playlist-item flex flex-col'>
              <Link
                to={`/playlists/${playlist._id}`}
                className='h5 title light-color'
              >
                {playlist.title}
              </Link>
              <p className='description'>{playlist.description}</p>
              <div className='flex-center justify-between'>
                <p>
                  {playlist.videos.length}{' '}
                  {playlist.videos.length === 1 ? 'video' : 'videos'}
                </p>
                <MdDeleteOutline
                  className='icon'
                  onClick={(e) => {
                    deletePlaylist(playlist._id, playlist.title).then((res) => {
                      dispatchPlaylists({
                        type: 'UPDATE_PLAYLISTS',
                        payload: res,
                      });
                    });
                  }}
                />
              </div>
            </div>
          ))}
        </section>
      ) : (
        <EmptyPage page='playlists' />
      )}
    </main>
  );
};

export default Playlists;
