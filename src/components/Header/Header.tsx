import React, { useState } from 'react';
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
  MenuLink,
  Picture,
  Play,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  Top,
  Title,
} from './styles/StyledHeader';

interface HeaderComposition {
  Button: React.FC<IButtonProps>;
  Description: React.FC<IDescriptionProps>;
  Dropdown: React.FC;
  Feature: React.FC;
  Group: React.FC;
  Gradient: React.FC;
  Logo: React.FC<ILogoProps>;
  Play: React.FC<IPlayProps>;
  Profile: React.FC;
  Picture: React.FC<IPictureProps>;
  Search: React.FC<ISearchProps>;
  Title: React.FC<{ children: string }>;
  Top: React.FC;
  MenuLink: React.FC<IMenuLinkProps>;
}

interface ComponentProps {
  bg: string;
  isNotBrowse: boolean;
  isProfiles: boolean;
  children: React.ReactNode;
}

export const Header: React.FC<ComponentProps> & HeaderComposition = ({
  bg,
  isNotBrowse,
  isProfiles,
  children,
  ...restProps
}: ComponentProps) => {
  return (
    <Container bg={bg} isNotBrowse={isNotBrowse} isProfiles={isProfiles} {...restProps}>
      {children}
    </Container>
  );
};

interface IButtonProps {
  children: string;
  to: string;
}

Header.Button = function HeaderButton({ children, to, ...restProps }: IButtonProps) {
  return (
    <Button to={to} {...restProps}>
      {children}
    </Button>
  );
};

interface IDescriptionProps {
  children: string;
  to: string;
}

Header.Description = function HeaderDescription({ children, ...restProps }: IDescriptionProps) {
  return <Description {...restProps}>{children}</Description>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

// TODO Correct this gradient

Header.Gradient = function HeaderGradient({ ...restProps }) {
  return <Gradient {...restProps} />;
};

interface ILogoProps {
  to: string;
}

Header.Logo = function HeaderLogo({ to, ...restProps }: ILogoProps) {
  return (
    <RouterLink to={to}>
      <Logo {...restProps} />
    </RouterLink>
  );
};

interface IPlayProps {
  children: string;
}

Header.Play = function HeaderPlay({ children, ...restProps }: IPlayProps) {
  return <Play {...restProps}>{children}</Play>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

interface IPictureProps {
  src: string;
}

Header.Picture = function HeaderPicture({ src, ...restProps }: IPictureProps) {
  return <Picture {...restProps} src={src ? `assets/images/profiles/${src}.png` : `assets/images/loading.gif`} />;
};

interface ISearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

Header.Search = function HeaderSearch({ search, setSearch, ...restProps }: ISearchProps) {
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

Header.Title = function HeaderTitle({ children, ...restProps }: { children: string }) {
  return <Title {...restProps}>{children}</Title>;
};

Header.Top = function HeaderTop({ children, ...restProps }) {
  return <Top {...restProps}>{children}</Top>;
};

interface IMenuLinkProps {
  children: string;
  active: boolean;
}

Header.MenuLink = function HeaderMenuLink({ children, active, ...restProps }: IMenuLinkProps) {
  return (
    <MenuLink active={active} {...restProps}>
      {children}
    </MenuLink>
  );
};
