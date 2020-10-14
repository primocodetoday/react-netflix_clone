import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Button,
  Container,
  Description,
  Dropdown,
  Feature,
  Gradient,
  Group,
  Logo,
  Link,
  Picture,
  Profile,
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

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={
        src ? `assets/images/profiles/${src}.png` : `assets/images/loading.gif`
      }
    />
  );
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Header.Description = function HeaderDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Header.MenuLink = function HeaderMenuLink({ children, to, ...restProps }) {
  return (
    <Link {...restProps} to={to}>
      {children}
    </Link>
  );
};

export default Header;
