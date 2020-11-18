import React, { useState, useEffect } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { useScroll } from 'hooks/useScroll';

import {
  Button,
  Container,
  Description,
  Dropdown,
  Feature,
  Group,
  Logo,
  MenuLink,
  Picture,
  Play,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  TopFrame,
  Title,
} from './styles/StyledHeader';

interface HeaderComposition {
  Button: React.FC<IButtonProps>;
  Description: React.FC<IDescriptionProps>;
  Dropdown: React.FC;
  Feature: React.FC;
  Group: React.FC;
  Play: React.FC<IPlayProps>;
  Profile: React.FC;
  Picture: React.FC<IPictureProps>;
  Search: React.FC<ISearchProps>;
  Title: React.FC<{ children: string }>;
  TopFrame: React.FC<TopFrameProps>;
  MenuLink: React.FC<IMenuLinkProps>;
  Logo: React.FC<LogoProps>;
}

export interface IHeaderProps {
  bg?: string;
  isNotBrowse?: boolean;
  isProfiles?: boolean;
  children: React.ReactNode;
}

export const Header: React.FC<IHeaderProps> & HeaderComposition = ({
  bg,
  isNotBrowse = false,
  isProfiles = false,
  children,
  ...restProps
}: IHeaderProps) => {
  return (
    // isNotBrowse - default background
    // is Profile - no background
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

Header.Description = function HeaderDescription({ children, ...restProps }) {
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

export interface LogoProps extends LinkProps {
  src: string;
  alt: string;
}

Header.Logo = function HeaderLogo({ to, src, alt }: LogoProps) {
  return (
    <RouterLink to={to}>
      <Logo src={src} alt={alt} />
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

export type TopFrameProps = {
  children: React.ReactNode;
  isNotBrowse?: boolean;
};

Header.TopFrame = function HeaderTop({ children, isNotBrowse = false, ...restProps }: TopFrameProps) {
  const [isDark, setIsDark] = useState(false);

  const position = useScroll();

  useEffect(() => {
    if (isNotBrowse && position > 5) {
      setIsDark(true);
    } else setIsDark(false);
  }, [position]);

  return (
    <TopFrame isDark={isDark} isNotBrowse={!isNotBrowse} {...restProps}>
      {children}
    </TopFrame>
  );
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
