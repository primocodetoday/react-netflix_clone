import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 815px;
  padding: 70px 45px;
  margin: auto;
`;

export const Item = styled.div`
  width: 93%;
  max-width: 670px;
  margin: auto;
  color: white;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 2em;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 23px;
  font-weight: normal;
  align-items: center;
  padding: 0.8em 1.2em 0.8em 1.2em;
  background: #303030;
  user-select: none;

  img {
    filter: brightness(0) invert(0.6);
    width: 22px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Body = styled.div`
  overflow: hidden;
  background: #303030;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  user-select: none;
`;

export const Span = styled.span`
  display: inline-block;
  padding: 1.2em;
  font-size: 22px;
  font-weight: normal;
  white-space: pre-wrap;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
