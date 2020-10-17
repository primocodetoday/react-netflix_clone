import React, { createContext, useContext, useState } from 'react';

import {
  Container,
  Row,
  Title,
  SubTitle,
  Text,
  Meta,
  Item,
  Poster,
} from './styles/StyledCard';

export const FeatureContext = createContext();

const Card = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(() => false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

Card.Row = function CardRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubtitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Poster = function CardPoster({ ...restProps }) {
  return <Poster {...restProps} />;
};

export default Card;
