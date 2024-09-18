import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PrivateRoute;
