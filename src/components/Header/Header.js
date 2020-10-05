import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Container, Top, Gradient, Logo, Button } from './styled/StyledHeader';

const Header = ({ bg = false, children, ...restProps }) => {
  return (
    <Container bg={bg} {...restProps}>
      {children}
    </Container>
  );
};

Header.Top = function HeaderFrame({ children, restProps }) {
  return <Top {...restProps}>{children}</Top>;
};

Header.Gradient = function HeaderGradient({ ...restProps }) {
  return <Gradient {...restProps} />;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <RouterLink to={to}>
      <Logo {...restProps} />
    </RouterLink>
  );
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

export default Header;
