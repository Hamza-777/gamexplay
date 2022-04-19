import React, { createContext, useContext, useReducer } from 'react';

const likedContext = createContext(null);

const initialState = {
  likedVideos: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_LIKED':
      return {
        ...state,
        likedVideos: payload,
      };
    default:
      return state;
  }
};

const LikedProvider = ({ children }) => {
  const [likedState, dispatchLiked] = useReducer(reducer, initialState);

  return (
    <likedContext.Provider value={{ likedState, dispatchLiked }}>
      {children}
    </likedContext.Provider>
  );
};

const useLiked = () => useContext(likedContext);

export { LikedProvider, useLiked };
