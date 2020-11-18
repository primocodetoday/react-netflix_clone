import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from 'views';
import 'normalize.css';
import { ROUTES } from 'routes';
import { IsUserLogged, ProtectedRoute } from 'helpers/routes';
import useAuthListener from 'hooks/useAuthListener';

export const App: React.FC = () => {
  const { user } = useAuthListener();

  return (
    <BrowserRouter>
      <IsUserLogged user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNIN} exact>
        <SignIn />
      </IsUserLogged>
      <IsUserLogged user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNUP} exact>
        <SignUp />
      </IsUserLogged>
      <ProtectedRoute exact user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserLogged user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
        <Home />
      </IsUserLogged>
    </BrowserRouter>
  );
};
