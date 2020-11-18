import React from 'react';
import { Header } from 'components';
import { ROUTES } from 'routes';
import { IHeaderProps } from 'components/Header/Header';

export const HeaderContainer: React.FC<IHeaderProps> = ({ children }) => {
  return (
    <Header isNotBrowse>
      <Header.TopFrame>
        <Header.Logo to={ROUTES.HOME} src="assets/images/Netflix_logo.png" alt="Netflix" />
        <Header.Button to={ROUTES.SIGNIN}>Sign In</Header.Button>
      </Header.TopFrame>
      {children}
    </Header>
  );
};
