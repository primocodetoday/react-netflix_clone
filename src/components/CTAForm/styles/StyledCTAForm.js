import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-top: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
  height: 60px;
  padding: 10px;
  border: 0;
`;

export const Text = styled.h3`
  font-size: 19.2px;
  padding: 0 10%;
  color: white;
  text-align: center;
  font-weight: normal;

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 32px;
  border: 0;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  font-size: 26px;
  font-weight: 400;
  border-radius: 2px;
  cursor: pointer;

  img {
    margin-left: 10px;

    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
  }
`;
