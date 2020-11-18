import styled, { css } from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Button = styled(RouterLink)`
  box-sizing: border-box;
  display: block;
  background-color: #e50914;
  height: fit-content;
  padding: 7px 17px;
  border: 0;
  color: white;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 5.6px;

  @media (max-width: 550px) {
    padding: 4px 8px;
  }

  &:hover {
    background-color: #f40612;
  }
`;

interface IContainerProps {
  bg?: string;
  isNotBrowse: boolean;
  isProfiles: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: ${({ bg }) =>
    bg ? `url(https://image.tmdb.org/t/p/original/${bg})` : `url(assets/images/home-bg-large.jpg)`};

  @media (max-width: 1000px) {
    background-image: ${({ bg }) =>
      bg ? `url(https://image.tmdb.org/t/p/original/${bg})` : `url(assets/images/home-bg-small.jpg)`};
  }

  @media (max-width: 1500px) {
    background-image: ${({ bg }) =>
      bg ? `url(https://image.tmdb.org/t/p/original/${bg})` : `url(assets/images/home-bg-medium.jpg)`};
  }

  ${({ isNotBrowse }) =>
    isNotBrowse &&
    css`
      height: unset;

      ::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
        color: white;
      }
    `}

  ${({ isProfiles }) =>
    isProfiles &&
    css`
      @media (min-width: 1px) {
        background-image: none;
      }
    `}
`;

export const Feature = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 4%;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  /* @media (max-width: 1100px) {
    display: none;
  } */
`;

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
  color: white;
`;

export interface ITopFrame {
  isDark: boolean;
  isNotBrowse: boolean;
}

export const TopFrame = styled.div<ITopFrame>`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 3;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: ${({ isDark }) =>
    isDark ? 'rgb(20, 20, 20)' : 'linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))'};
  transition: all 0.5s;
  transition-timing-function: ease-in;

  a {
    display: flex;
  }

  ${({ isNotBrowse }) =>
    isNotBrowse &&
    css`
      position: relative;
    `}
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 166.5px;
  height: 45px;
  padding-top: 8px;

  @media (max-width: 1449px) {
    width: 133px;
    height: 36px;
  }
  @media (max-width: 950px) {
    width: 108px;
    height: 29.19px;
  }
  @media (max-width: 550px) {
    width: 88.8px;
    height: 24px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  line-height: normal;
  padding-bottom: 0.3rem;
  font-weight: 800;
  color: white;
  font-size: 22px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Description = styled.p`
  width: 45rem;
  max-width: 360px;
  height: 60px;
  margin: 0;
  padding-top: 0.7rem;
  line-height: 1.3;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  font-size: 0.8rem;
  font-weight: 600;
`;

export const MenuLink = styled.p<{ active: boolean }>`
  color: #e5e5e5;
  text-decoration: none;
  margin-left: 30px;
  font-weight: ${({ active }) => (active ? '700' : 'normal')};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.65);
  font-size: 14px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

// TODO make burger for small screens

export const Picture = styled.button<{ src: string }>`
  width: 32px;
  height: 32px;
  border: 0;
  background: url(${({ src }) => src});
  background-size: contain;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 32px;
  right: 10px;
  width: 100px;
  background-color: black;
  padding: 10px;

  ${Group}:last-of-type ${MenuLink} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${MenuLink}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 0px;
  }

  a {
    font-size: 12px;
    margin-left: 10px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Play = styled.button`
  max-width: 130px;
  padding: 5px 10px;
  border: none;
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  outline: none;
  color: #fff;
  border-radius: 5px;
  background-color: rgba(51, 51, 51, 0.5);
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    color: #000;
    background-color: #e6e6e6;
  }
`;

export const Profile = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-left: 20px;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;
export const SearchInput = styled.input<{ active: boolean }>`
  background-color: #44444459;
  width: 0px;
  height: 30px;
  padding: 0;
  border: 1px solid white;
  color: white;
  transition: width 0.5s;
  font-size: 14px;
  margin-left: 0;
  opacity: 0;

  ${({ active }) =>
    active &&
    css`
      width: 200px;
      padding: 0 10px;
      margin-left: 10px;
      opacity: 1;
    `}
`;
