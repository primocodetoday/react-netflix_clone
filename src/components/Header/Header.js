import React from 'react';
import { Link } from 'react-router-dom';

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
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.Button = function HeaderButton({ to, children, ...restProps }) {
  return (
    <Link to={to}>
      <Button {...restProps}>{children}</Button>
    </Link>
  );
};

export default Header;
