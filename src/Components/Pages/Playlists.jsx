import React from 'react';
import EmptyPage from './EmptyPage';
import { useModal } from '../Providers/ModalProvider';
import '../Styles/Playlists.css';

const Playlists = () => {
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
      <EmptyPage page='playlists' />
    </main>
  );
};

export default Playlists;
