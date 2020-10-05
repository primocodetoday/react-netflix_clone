import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  background-image: url(${({ bg }) =>
    bg
      ? `url("https://image.tmdb.org/t/p/original/${bg}")`
      : 'assets/images/home-bg-large.jpg'});

  @media (max-width: 1000px) {
    background-image: url(${({ bg }) =>
      bg
        ? `url("https://image.tmdb.org/t/p/original/${bg}")`
        : 'assets/images/home-bg-small.jpg'});
  }

  @media (max-width: 1500px) {
    background-image: url(${({ bg }) =>
      bg
        ? `url("https://image.tmdb.org/t/p/original/${bg}")`
        : 'assets/images/home-bg-medium.jpg'});
  }
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
