import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 165px 50px;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  border-bottom: 8px solid #222;
`;

export const Title = styled.h1`
  color: #fff;
  z-index: 1;
  font-size: 50px;
  margin: auto;
  max-width: 640px;
  line-height: 1.1;
  position: relative;
  text-align: center;

  @media (max-width: 1449px) {
    font-size: 45px;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  z-index: 1;
  font-size: 26px;
  margin: 1rem auto 0;
  max-width: 640px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
