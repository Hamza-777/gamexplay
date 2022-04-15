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
    </section>
  );
};

export default CommentSection;
