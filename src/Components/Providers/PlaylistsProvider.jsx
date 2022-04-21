import React, { createContext, useContext, useReducer } from 'react';

const playlistsContext = createContext(null);

const initialState = {
  playlists: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_PLAYLISTS':
      return {
        ...state,
        playlists: payload,
      };
    default:
      return state;
  }
};

const PlaylistsProvider = ({ children }) => {
  const [playlistsState, dispatchPlaylists] = useReducer(reducer, initialState);

  return (
    <playlistsContext.Provider value={{ playlistsState, dispatchPlaylists }}>
      {children}
    </playlistsContext.Provider>
  );
};

const usePlaylists = () => useContext(playlistsContext);

export { PlaylistsProvider, usePlaylists };
