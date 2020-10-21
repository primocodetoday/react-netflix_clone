import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const IsUserLogged = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        !user ? children : <Redirect to={{ pathname: loggedInPath }} />
      }
    />
  );
};

export const ProtectedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: 'signin', state: { from: location } }} />
        )
      }
    />
  );
};
