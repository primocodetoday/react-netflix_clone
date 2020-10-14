import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Button,
  Container,
  Description,
  Feature,
  Gradient,
  Group,
  Logo,
  Link,
  Top,
  Title,
} from './styles/StyledHeader';

const Header = ({ bg, children, ...restProps }) => {
  return (
    <Container bg={bg} {...restProps}>
      {children}
    </Container>
  );
};

Header.Top = function HeaderTop({ children, restProps }) {
  return <Top {...restProps}>{children}</Top>;
};

Header.Group = function HeaderGroup({ children, restProps }) {
  return <Group {...restProps}>{children}</Group>;
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

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Header.Description = function HeaderDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Header.MenuLink = function HeaderMenuLink({ children, to, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

export default Header;
