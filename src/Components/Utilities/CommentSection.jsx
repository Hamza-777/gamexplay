import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useComment } from '../Providers/CommentProvider';
import { useAuth } from '../Providers/AuthProvider';
import { useTheme } from '../Providers/ThemeProvider';
import { getUser } from '../Misc/localStorage';
import { infoPopup } from '../Misc/toasts';

const CommentSection = () => {
  const [commentText, setCommentText] = useState('');
  const { videoId } = useParams();
  const { theme } = useTheme();
  const {
    authState: { userLoggedIn },
  } = useAuth();
  const {
    commentState: { comments },
    dispatchComment,
  } = useComment();
  const currentUser = getUser();

  const submitComment = (e) => {
    e.preventDefault();
    if (userLoggedIn) {
      dispatchComment({
        type: 'UPDATE_COMMENTS',
        payload: {
          on: videoId,
          author: currentUser.username,
          text: commentText,
          avatar:
            'https://beinex.com/topics/wp-content/uploads/2021/09/5d711b8c-c82f-4ce9-a973-f6cdb87a8689.jpg',
          authorId: currentUser._id,
        },
      });
      setCommentText('');
    } else {
      infoPopup(
        'Login or create an account to add a comment on videos!',
        theme
      );
      setCommentText('');
    }
  };

  return (
    <section className='comment-section flex flex-col'>
      <p className='h3'>Comments</p>
      <form className='comment-form flex flex-col' onSubmit={submitComment}>
        <input
          type='text'
          value={commentText}
          className='comment-input light-color'
          placeholder='Add a comment...'
          onChange={(e) => setCommentText(e.target.value)}
          required
        />
        <input type='submit' value='Comment' className='btn btn-outline' />
      </form>
      <div className='comments-container flex flex-col'>
        {comments.filter((comment) => comment.on === videoId).length ? (
          comments
            .filter((comment) => comment.on === videoId)
            .map((comment, idx) => (
              <div key={idx} className='comment flex-center'>
                <img
                  src={comment.avatar}
                  alt='avatar'
                  className='user-avatar'
                />
                <aside className='flex flex-col comment-details'>
                  <p className='h5'>{comment.author}</p>
                  <p className='h6'>{comment.text}</p>
                </aside>
              </div>
            ))
        ) : (
          <p className='h4'>No comments on this video yet!</p>
        )}
        {/* <div className='comment flex-center'>
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
        </div> */}
      </div>
    </section>
  );
};

export default CommentSection;
