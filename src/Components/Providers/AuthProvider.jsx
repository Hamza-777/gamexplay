import React, { useContext, createContext, useReducer } from 'react';
import { getAuth } from '../Misc/localStorage';

const authContext = createContext(null);

const initialAuth = {
  userLoggedIn: getAuth() ? true : false,
  token: getAuth(),
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOGGED_IN':
    case 'SIGNED_UP':
      return {
        ...state,
        userLoggedIn: payload ? true : false,
        token: payload,
      };
    case 'LOGGED_OUT':
      return {
        ...state,
        userLoggedIn: false,
        token: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(reducer, initialAuth);

  return (
    <authContext.Provider value={{ authState, dispatchAuth }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };
