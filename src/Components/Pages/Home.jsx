import React from 'react';
import '../Styles/Home.css';
import Display from '../Utilities/Display';
import VideoList from '../Utilities/VideoList';
import { useVideo } from '../Providers/VideoProvider';
import { useAuth } from '../Providers/AuthProvider';
import { getUser } from '../Misc/localStorage';

const Home = () => {
  const { videos } = useVideo();
  const {
    authState: { userLoggedIn },
  } = useAuth();
  const currentUser = getUser();

  return (
    <main className='container'>
      {userLoggedIn ? (
        currentUser.firstName ? (
          <p className='h1 welcome'>
            Welcome to <span className='site-name'>Game❌Play</span>,{' '}
            {`${currentUser.firstName} ${currentUser.lastName}`} !
          </p>
        ) : (
          <p className='h1 welcome'>
            Welcome to <span className='site-name'>Game❌Play</span>,{' '}
            {currentUser.username} !
          </p>
        )
      ) : (
        ''
      )}
      <Display />
      <section className='video-listings flex-center flex-col align-start'>
        <hr className='hr' />
        <p className='h3' id='valorant'>
          Valorant
        </p>
        <VideoList
          videos={videos.filter((video) => video._id.includes('valorant'))}
        />
        <hr className='hr' />
        <p className='h3' id='csgo'>
          Counter Strike: Global Offensive
        </p>
        <VideoList
          videos={videos.filter((video) => video._id.includes('csgo'))}
        />
        <hr className='hr' />
        <p className='h3' id='fortnite'>
          Fortnite
        </p>
        <VideoList
          videos={videos.filter((video) => video._id.includes('fortnite'))}
        />
        <hr className='hr' />
        <p className='h3' id='lol'>
          League Of Legends
        </p>
        <VideoList
          videos={videos.filter((video) => video._id.includes('lol'))}
        />
        <hr className='hr' />
        <p className='h3' id='minecraft'>
          Minecraft
        </p>
        <VideoList
          videos={videos.filter((video) => video._id.includes('minecraft'))}
        />
      </section>
    </main>
  );
};

export default Home;
