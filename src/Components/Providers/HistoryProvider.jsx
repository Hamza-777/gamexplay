import React, { createContext, useContext, useReducer } from 'react';

const historyContext = createContext(null);

const initialState = {
  historyVideos: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_HISTORY':
      return {
        ...state,
        historyVideos: payload,
      };
    default:
      return state;
  }
};

const HistoryProvider = ({ children }) => {
  const [historyState, dispatchHistory] = useReducer(reducer, initialState);

  return (
    <historyContext.Provider value={{ historyState, dispatchHistory }}>
      {children}
    </historyContext.Provider>
  );
};

const useHistory = () => useContext(historyContext);

export { HistoryProvider, useHistory };
