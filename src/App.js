import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home, Browse, SignIn, SignUp } from 'views';

import GlobalStyles from 'global-styles';
import 'normalize.css';

import { routes } from 'routes';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.browse} component={Browse} />
      <Route path={routes.signIn} component={SignIn} />
      <Route path={routes.signUp} component={SignUp} />
    </BrowserRouter>
  );
};

export default App;
