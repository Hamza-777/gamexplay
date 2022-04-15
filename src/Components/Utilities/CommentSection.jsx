import React from 'react';

const CommentSection = () => {
  return (
    <section className='comment-section flex flex-col'>
      <p className='h3'>Comments</p>
      <form className='comment-form flex flex-col'>
        <input
          type='text'
          className='comment-input light-color'
          placeholder='Add a comment...'
        />
        <input type='submit' value='Comment' className='btn btn-comment' />
      </form>
      <div className='comments-container flex flex-col'>
        <div className='comment flex-center'>
          <img
            src='https://www.nfssa.com/uploads/avatars/avatar_11055.jpg?dateline=1489263605'
            alt='avatar'
            className='user-avatar'
          />
          <aside className='flex flex-col comment-details'>
            <p className='h5'>spongebob</p>
            <p className='h6'>Wow! What a video!</p>
          </aside>
        </div>
        <div className='comment flex-center'>
          <img
            src='https://cdn-learn.adafruit.com/assets/assets/000/012/878/thumb100/led_strips_doge.bmp?1386611464'
            alt='avatar'
            className='user-avatar'
          />
          <aside className='flex flex-col comment-details'>
            <p className='h5'>Doge</p>
            <p className='h6'>
              Hello this is doge speaking, please buy dogecoin 😭🙏
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
