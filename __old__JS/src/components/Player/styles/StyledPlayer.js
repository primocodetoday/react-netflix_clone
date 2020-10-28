import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  height: 100%;
  margin: 0 20px;
  background: rgba(0, 0, 0, 0.5);
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    width: 100%;
    height: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 22px;
  height: 22px;
  border: 0;
  opacity: 0.4;
  cursor: pointer;
  color: white;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    width: 2px;
    height: 22px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 45px;
  color: white;
  background-color: #e50914;
  border-color: #ff0a16;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  padding-left: 0;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`;
