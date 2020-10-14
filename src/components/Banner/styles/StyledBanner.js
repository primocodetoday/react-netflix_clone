import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  max-width: 950px;
  padding: 165px 50px;
  margin: 0 auto;
  text-align: center;
  border-bottom: 8px solid #222;
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin: auto;
  line-height: 1.1;
  color: #fff;
  font-size: 50px;
  text-align: center;

  @media (max-width: 1449px) {
    font-size: 45px;
  }
`;

export const SubTitle = styled.h2`
  z-index: 1;
  max-width: 640px;
  margin: 1rem auto 0;
  color: #fff;
  font-size: 26px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
