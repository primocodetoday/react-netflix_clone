import styled from 'styled-components/macro';

export const AnimationCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 70px 45px;
  background: 0 0;
  color: white;
  margin-bottom: 0;
  border-bottom: 8px solid #222;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CardText = styled.div`
  z-index: 3;
  flex: 0 1 auto;
  width: 52%;
  height: 100%;
  padding: 0 3rem 0 0;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const CardImg = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  width: 48%;
  height: 100%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin: 0 0 0.4em;
  line-height: 1.1;
  font-size: 40px;

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
  position: relative;
  overflow: hidden;
  margin: -5% 0 0 0;
`;

export const Animation = styled.div`
  position: absolute;
  top: ${({ top }) => top}%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth}%;
  height: 100%;
  max-height: ${({ maxHeight }) => maxHeight}%;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;
