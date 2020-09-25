import styled from 'styled-components/macro';

export const AnimationCard = styled.div`
  padding: 70px 45px;
  position: relative;
  margin-bottom: 0;
  border-bottom: 8px solid #222;
  color: white;
  overflow: hidden;
  background: 0 0;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CardText = styled.div`
  width: 52%;
  height: 100%;
  flex: 0 1 auto;
  padding: 0 3rem 0 0;
  z-index: 3;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const CardImg = styled.div`
  display: flex;
  height: 100%;
  width: 48%;
  flex: 0 1 auto;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 1.1;
  margin: 0 0 0.4em;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 21px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  position: relative;
  z-index: 1;
  max-width: 100%;
  height: auto;
  border: 0;
`;

export const CardAnimation = styled.div`
  margin: -5% 0 0 0;
  position: relative;
  overflow: hidden;
`;

export const Animation = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ maxWidth }) => maxWidth}%;
  max-height: ${({ maxHeight }) => maxHeight}%;
  position: absolute;
  top: ${({ top }) => top}%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;
