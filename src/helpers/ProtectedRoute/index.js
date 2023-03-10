import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('jwt_token');
  if(!token) {
    return <Navigate to='/error' replace />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired
};

export default ProtectedRoute;
