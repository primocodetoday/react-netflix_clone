﻿import React, { useState } from 'react';
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
  Play,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
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

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Header.Description = function HeaderDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Group = function HeaderGroup({ children, restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

// TODO Correct this gradient

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

Header.Play = function HeaderPlay({ children, ...restProps }) {
  return <Play {...restProps}>{children}</Play>;
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

Header.Search = function HeaderSearch({ search, setSearch, ...restProps }) {
  const [searchActive, setSearchActive] = useState(() => false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src="/assets/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        placeholder="Search Movies and TV Shows"
        active={searchActive}
      />
    </Search>
  );
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Header.Top = function HeaderTop({ children, restProps }) {
  return <Top {...restProps}>{children}</Top>;
};

Header.MenuLink = function HeaderMenuLink({ children, to, ...restProps }) {
  return (
    <Link {...restProps} to={to}>
      {children}
    </Link>
  );
};

export default Header;
