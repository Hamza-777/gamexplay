import React from 'react';
import EmptyPage from './EmptyPage';
import '../Styles/Watchlater.css';

const Watchlater = () => {
  return (
    <main className='container watchlater flex-center flex-col align-start'>
      <p className='h2'>Watchlater</p>
      <EmptyPage page='watchlater' />
    </main>
  );
};

export default Watchlater;
