import React, { createContext, useState } from 'react';
import { IRowStyledProps } from './styles/StyledCard';

import {
  Container,
  Row,
  Title,
  SubTitle,
  Text,
  Meta,
  Item,
  Poster,
  Entities,
  Feature,
  Content,
  FeatureTitle,
  FeatureClose,
  FeatureText,
  Maturity,
} from './styles/StyledCard';

interface IFeatureContextType {
  showFeature: boolean;
  setShowFeature: React.Dispatch<React.SetStateAction<boolean>>;
  itemFeature: IDataProps;
  setItemFeature: React.Dispatch<React.SetStateAction<IDataProps>>;
}

export const FeatureContext = createContext<IFeatureContextType | null>(null);

interface ICardComposition {
  Row: React.FC<IRowProps>;
  Title: React.FC;
  SubTitle: React.FC;
  Text: React.FC;
  Entities: React.FC<{ children: React.ReactNode }>;
  Meta: React.FC;
  Feature: React.FC<{ children: React.ReactNode; category: string }>;
  Item: React.FC<IItemProps>;
  Poster: React.FC;
}

export interface IDataProps {
  id: string;
  slug: string;
  title: string;
  genre: string;
  maturity: number;
  description: string;
}

const defaultItemFeature: IDataProps = {
  id: 'loading',
  slug: 'loading...',
  title: 'loading...',
  genre: 'loading...',
  maturity: 18,
  description: 'loading...',
};

type ComponentProps = {
  children: React.ReactNode;
};

export const Card: React.FC<ComponentProps> & ICardComposition = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState(defaultItemFeature);

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

interface IRowProps extends IRowStyledProps {
  children: React.ReactNode;
}

Card.Row = function CardRow({ children, ...restProps }: IRowProps) {
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

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

// FIXME Solve problem with default itemFeature types

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useCard();

  return showFeature ? (
    <Feature background={`assets/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} {...restProps}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="assets/icons/close.png" alt="close" />
        </FeatureClose>
        <Row margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Row>
        {children}
      </Content>
    </Feature>
  ) : null;
};

interface IItemProps {
  item: IDataProps;
  children: React.ReactNode;
}

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useCard();

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

export const useCard = (): IFeatureContextType => {
  const context = React.useContext(FeatureContext);
  if (!context) {
    throw new Error('This component must be used within a <Accordion> component.');
  }
  return context;
};
