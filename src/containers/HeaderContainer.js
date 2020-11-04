import React from 'react';
import { Header } from 'components';
import { routes } from 'routes';

export const HeaderContainer = ({ bg, children }) => {
  return (
    <Header isNotBrowse>
      <Header.TopFrame>
        <Header.Logo to={routes.home} src="assets/images/Netflix_logo.png" alt="Netflix" />
        <Header.Button to={routes.signIn}>Sign In</Header.Button>
      </Header.TopFrame>
      {children}
      {bg ? null : <Header.Gradient />}
    </Header>
  );
};
