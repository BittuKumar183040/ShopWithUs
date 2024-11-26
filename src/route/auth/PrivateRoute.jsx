import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ component: Component, restricted, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
      <Component {...rest} />
    ) : (
      <Navigate to='/login' />
  );
};

export default PrivateRoute;
