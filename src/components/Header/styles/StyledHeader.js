import styled, { css } from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  height: 56vw;
  position: relative;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: ${({ bg }) =>
    bg
      ? `url(https://image.tmdb.org/t/p/original/${bg})`
      : `url(assets/images/home-bg-large.jpg)`};

  @media (max-width: 1000px) {
    background-image: ${({ bg }) =>
      bg
        ? `url(https://image.tmdb.org/t/p/original/${bg})`
        : `url(assets/images/home-bg-small.jpg)`};
  }

  @media (max-width: 1500px) {
    background-image: ${({ bg }) =>
      bg
        ? `url(https://image.tmdb.org/t/p/original/${bg})`
        : `url(assets/images/home-bg-medium.jpg)`};
  }

  ${({ isNotBrowse }) =>
    isNotBrowse &&
    css`
      height: unset;
      position: unset;
    `}

  ${({ isProfiles }) =>
    isProfiles &&
    css`
      @media (min-width: 1px) {
        background-image: none;
      }
    `}
`;

export const Gradient = styled.div`
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  color: white;
`;

export const Top = styled.div`
  display: flex;
  margin: 0 56px;
  padding-top: 20px;
  z-index: 3;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s;
  transition-timing-function: ease-in;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 45px;
  width: 166.5px;
  padding-top: 8px;

  @media (max-width: 1449px) {
    height: 36px;
    width: 133px;
  }
  @media (max-width: 950px) {
    height: 29.19px;
    width: 108px;
  }
  @media (max-width: 550px) {
    height: 24px;
    width: 88.8px;
  }
`;

export const Button = styled(RouterLink)`
  display: block;
  background-color: #e50914;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 7px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  margin-top: 5.6px;

  @media (max-width: 550px) {
    padding: 4px 8px;
  }

  &:hover {
    background-color: #f40612;
  }
`;

export const Feature = styled.div`
  position: absolute;
  top: 50%;
  left: 4%;
  display: flex;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  /* @media (max-width: 1100px) {
    display: none;
  } */
`;

export const Title = styled.h1`
  padding-bottom: 0.3rem;
  font-weight: 800;
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Description = styled.p`
  margin: 0;
  width: 45rem;
  max-width: 360px;
  height: 60px;
  padding-top: 0.7rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.3;
`;

export const Link = styled(RouterLink)`
  color: #e5e5e5;
  text-decoration: none;
  margin-left: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.65);
  font-size: 14px;

  &:hover {
    font-weight: bold;
  }
`;

// TODO make burger for small screens

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 150px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
