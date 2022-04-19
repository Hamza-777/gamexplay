import React, { createContext, useContext, useReducer } from 'react';

const watchLaterContext = createContext(null);

const initialState = {
  watchlaterVideos: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_WATCHLATERS':
      return {
        ...state,
        watchlaterVideos: payload,
      };
    default:
      return state;
  }
};

const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, dispatchWatchLater] = useReducer(
    reducer,
    initialState
  );

  return (
    <watchLaterContext.Provider value={{ watchLaterState, dispatchWatchLater }}>
      {children}
    </watchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(watchLaterContext);

export { WatchLaterProvider, useWatchLater };
