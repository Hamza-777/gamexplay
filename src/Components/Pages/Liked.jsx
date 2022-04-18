import React from 'react';
import EmptyPage from './EmptyPage';
import '../Styles/Liked.css';

const Liked = () => {
  return (
    <main className='container liked flex-center flex-col align-start'>
      <p className='h2'>Liked</p>
      <EmptyPage page='liked' />
    </main>
  );
};

export default Liked;
