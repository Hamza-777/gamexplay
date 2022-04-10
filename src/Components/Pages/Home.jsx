import React from 'react';
import '../Styles/Home.css';
import Display from '../Utilities/Display';
import VideoList from '../Utilities/VideoList';
import { useVideo } from '../Providers/VideoProvider';

const Home = () => {
  const { videos } = useVideo();

  return (
    <main className='container'>
      <Display />
      <section className='video-listings flex-center flex-col align-start'>
        <h1 className='h3' id='valorant'>
          Valorant
        </h1>
        <VideoList
          videos={videos.filter((video) => video._id.includes('valorant'))}
        />
        <h1 className='h3' id='csgo'>
          Counter Strike: Global Offensive
        </h1>
        <VideoList
          videos={videos.filter((video) => video._id.includes('csgo'))}
        />
        <h1 className='h3' id='fortnite'>
          Fortnite
        </h1>
        <VideoList
          videos={videos.filter((video) => video._id.includes('fortnite'))}
        />
        <h1 className='h3' id='lol'>
          League Of Legends
        </h1>
        <VideoList
          videos={videos.filter((video) => video._id.includes('lol'))}
        />
        <h1 className='h3' id='minecraft'>
          Minecraft
        </h1>
        <VideoList
          videos={videos.filter((video) => video._id.includes('minecraft'))}
        />
      </section>
    </main>
  );
};

export default Home;
