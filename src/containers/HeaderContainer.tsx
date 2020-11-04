import React from 'react';
import { Header } from 'components';
import { routes } from 'routes';
import { IHeaderProps } from 'components/Header/Header.interface';

export const HeaderContainer: React.FC<IHeaderProps> = ({ bg, children }) => {
  return (
    <Header isNotBrowse>
      <Header.TopFrame>
        {/* <Header.Logo to={routes.home} src="assets/images/Netflix_logo.png" alt="Netflix" /> */}
        <Header.Button to={routes.signIn}>Sign In</Header.Button>
      </Header.TopFrame>
      {children}
      {bg ? null : <Header.Shadow />}
    </Header>
  );
};
