import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from 'views';
import 'normalize.css';
import { routes } from 'routes';
import { IsUserLogged, ProtectedRoute } from 'helpers/routes';
import useAuthListener from 'hooks/useAuthListener';

export const App:React.FC = () => {
  const { user } = useAuthListener();

  return (
    <BrowserRouter>
      <IsUserLogged
        user={user}
        loggedInPath={routes.browse}
        path={routes.signIn}
        exact
      >
        <SignIn />
      </IsUserLogged>
      <IsUserLogged
        user={user}
        loggedInPath={routes.browse}
        path={routes.signUp}
        exact
      >
        <SignUp />
      </IsUserLogged>
      <ProtectedRoute exact user={user} path={routes.browse}>
        <Browse />
      </ProtectedRoute>
      <IsUserLogged
        user={user}
        loggedInPath={routes.browse}
        path={routes.home}
        exact
      >
        <Home />
      </IsUserLogged>
    </BrowserRouter>
  );
}
