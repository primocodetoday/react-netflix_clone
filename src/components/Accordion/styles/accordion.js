import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Item = styled.div`
  color: white;
  margin: auto;
  margin-bottom: 10px;
  max-width: 670px;
  width: 93%;
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
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

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
  max-height: ${({ maxHeight }) => maxHeight}px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  background: #303030;
  user-select: none;
`;

export const On = styled(Body)`
  max-height: 1200px;
`;

export const Off = styled(Body)`
  max-height: 0px;
`;

export const Span = styled.span`
  display: inline-block;
  font-size: 22px;
  font-weight: normal;
  line-height: normal;
  padding: 1.2em;
  white-space: pre-wrap;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
