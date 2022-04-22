import React, { useState, useEffect } from 'react';
import { useVideo } from '../Providers/VideoProvider';
import { usePlaylists } from '../Providers/PlaylistsProvider';
import { useAuth } from '../Providers/AuthProvider';
import { useModal } from '../Providers/ModalProvider';
import { useTheme } from '../Providers/ThemeProvider';
import '../Styles/Modal.css';
import { createPlaylist, addToPlaylist, getPlaylists } from '../Misc/requests';
import { infoPopup } from '../Misc/toasts';

const Modal = () => {
  const { videos } = useVideo();
  const {
    playlistsState: { playlists },
    dispatchPlaylists,
  } = usePlaylists();
  const {
    authState: { userLoggedIn },
  } = useAuth();
  const { theme } = useTheme();
  const { modalOpen, setModalOpen } = useModal();
  const [currentVideo, setCurrentVideo] = useState(
    videos.filter((video) => video._id === modalOpen.id)[0]
  );
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const { title, description } = formData;

  const changeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (userLoggedIn) {
      createPlaylist({ playlist: { title, description } }).then((res) => {
        dispatchPlaylists({
          type: 'UPDATE_PLAYLISTS',
          payload: res,
        });
        setFormData({ ...formData, title: '', description: '' });
      });
    } else {
      infoPopup('Login or make an account to create a playlist!', theme);
    }
  };

  useEffect(() => {
    setCurrentVideo(videos.filter((video) => video._id === modalOpen.id)[0]);
  }, [videos, modalOpen.id]);

  return (
    <main className='modal-container flex-center'>
      <section className='modal flex-center'>
        {currentVideo && modalOpen.id && (
          <aside className='modal-for-video flex-center flex-col align-start'>
            <p className='h3 vid-title light-color'>{currentVideo.title}</p>
            <img
              src={`https://i.ytimg.com/vi/${currentVideo.vidSrc}/maxresdefault.jpg`}
              alt={currentVideo.title}
              className='video-img'
            />
            <div className='creator-info flex-center'>
              <img
                src={currentVideo.creatorImg}
                alt={currentVideo.creator}
                className='creator-img'
              />
              <p className='h4 light-color'>{currentVideo.creator}</p>
            </div>
          </aside>
        )}
        <aside className='playlists-info flex flex-col align-start'>
          <form
            className='playlist-form flex-center flex-col align-start'
            onSubmit={submitForm}
          >
            <input
              type='text'
              name='title'
              value={title}
              placeholder='Name your playlist..'
              className='playlist-title light-color'
              onChange={changeFormData}
              required
            />
            <input
              type='text'
              name='description'
              value={description}
              placeholder='Describe your playlist..'
              className='playlist-desc light-color'
              onChange={changeFormData}
            />
            <button className='btn btn-outline'>Create</button>
          </form>
          <p className='h2 light-color'>Available Playlists</p>
          <div className='all-playlists'>
            {userLoggedIn && playlists.length ? (
              playlists.map((playlist) => (
                <div
                  key={playlist._id}
                  className='playlist flex-center justify-between'
                >
                  <p className='h5 light-color'>{playlist.title}</p>
                  {modalOpen.id && (
                    <button
                      className='btn btn-outline'
                      onClick={(e) => {
                        addToPlaylist({ video: currentVideo }, playlist._id);
                        getPlaylists().then((res) => {
                          dispatchPlaylists({
                            type: 'UPDATE_PLAYLISTS',
                            payload: res,
                          });
                        });
                      }}
                    >
                      Add
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p className='light-color'>No playlists created yet!</p>
            )}
          </div>
          <button
            className='btn btn-outline close-modal'
            onClick={(e) =>
              setModalOpen({ ...modalOpen, status: false, id: null })
            }
          >
            Close
          </button>
        </aside>
      </section>
    </main>
  );
};

export default Modal;
