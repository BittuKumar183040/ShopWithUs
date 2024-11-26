import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated && restricted ? (
    <Navigate to="/dashboard" />
  ) : (
    <Component {...rest} />
  );
};

export default PublicRoute;
