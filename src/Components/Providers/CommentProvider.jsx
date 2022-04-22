import React, { createContext, useContext, useReducer } from 'react';

const commentContext = createContext(null);

const initialState = {
  comments: [
    {
      on: 'valorant4',
      author: 'spongebob',
      text: 'Wow! What a video!',
      avatar:
        'https://www.nfssa.com/uploads/avatars/avatar_11055.jpg?dateline=1489263605',
      authorId: 0,
    },
    {
      on: 'valorant4',
      author: 'Doge',
      text: 'Hello this is doge speaking, please buy dogecoin 😭🙏',
      avatar:
        'https://cdn-learn.adafruit.com/assets/assets/000/012/878/thumb100/led_strips_doge.bmp?1386611464',
      authorId: 1,
    },
  ],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_COMMENTS':
      return {
        ...state,
        comments: [payload, ...state.comments],
      };
    default:
      return state;
  }
};

const CommentProvider = ({ children }) => {
  const [commentState, dispatchComment] = useReducer(reducer, initialState);

  return (
    <commentContext.Provider value={{ commentState, dispatchComment }}>
      {children}
    </commentContext.Provider>
  );
};

const useComment = () => useContext(commentContext);

export { CommentProvider, useComment };
