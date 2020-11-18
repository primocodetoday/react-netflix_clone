import styled from 'styled-components/macro';

export const Title = styled.h1`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SubTitle = styled.p`
  display: none;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
`;

// you can do this in this ways
export interface IRowStyledProps {
  flexDirection: 'row' | 'column';
  alignItems: string;
  margin: string;
}

export const Row = styled.div<IRowStyledProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  align-items: ${({ alignItems }) => alignItems || `center`};
  padding: 10px 56px;
  margin: ${({ margin }) => margin || `0`};

  @media (max-width: 1000px) {
    padding: 10px 30px;
  }

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`;

export const Text = styled.p`
  display: none;
  line-height: normal;
  color: #fff;
  margin-top: 5px;
  font-size: 10px;
  margin-bottom: 0;
  user-select: none;
`;

export interface FeatureTextStyledProps {
  fontWeight?: 'bold';
}

export const FeatureText = styled.p<FeatureTextStyledProps>`
  margin: 0;
  color: white;
  font-size: 18px;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

interface FeatureStyledProps {
  background: string;
}

export const Feature = styled.div<FeatureStyledProps>`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 360px;
  margin: 10px 0px;
  background: url(${({ background }) => background});
  background-size: contain;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: 0;
  color: white;
  cursor: pointer;
  background-color: transparent;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;
interface MaturityStyledProps {
  rating: number;
}

export const Maturity = styled.div<MaturityStyledProps>`
  background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
  border-radius: 15px;
  width: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;

export const Content = styled.div`
  max-width: 500px;
  margin: 56px;
  line-height: normal;

  @media (max-width: 1000px) {
    max-width: none;
    margin: 30px;
  }
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  margin-right: 5px;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0px;
  }

  &:hover {
    z-index: 99;
    transform: scale(1.3);
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }
`;

export const Poster = styled.img`
  width: 100%;
  max-width: 305px;
  height: auto;
  padding: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
`;
