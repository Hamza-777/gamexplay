import React from 'react';
import EmptyPage from './EmptyPage';
import '../Styles/History.css';

const History = () => {
  return (
    <main className='container history flex-center flex-col align-start'>
      <p className='h2'>History</p>
      <EmptyPage page='history' />
    </main>
  );
};

export default History;
