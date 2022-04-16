import React from 'react';
import { useAuth } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const {
    authState: { userLoggedIn },
  } = useAuth();
  return userLoggedIn ? children : <Navigate to='/login-signup' />;
};

export default PrivateRoute;
