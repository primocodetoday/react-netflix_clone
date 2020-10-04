import React from 'react';
import PropTypes from 'prop-types';
import {
  AnimationCard,
  CardContainer,
  CardText,
  CardImg,
  Title,
  SubTitle,
  Image,
  CardAnimation,
  Animation,
  Video,
} from './styled/StyledJumbotron';

const Jumbotron = ({ children, direction }, ...restProps) => {
  return (
    <AnimationCard {...restProps}>
      <CardContainer direction={direction}>{children}</CardContainer>
    </AnimationCard>
  );
};

Jumbotron.CardText = function JumbotronCardText({ children, ...restProps }) {
  return <CardText {...restProps}>{children}</CardText>;
};

Jumbotron.CardImg = function JumbotronCardImg({ children, ...restProps }) {
  return <CardImg {...restProps}>{children}</CardImg>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumboSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Jumbotron.CardAnimation = function JumbotronCardAnimation({
  children,
  ...restProps
}) {
  return <CardAnimation {...restProps}>{children}</CardAnimation>;
};

Jumbotron.Animation = function JumbotronAnimation({ children, ...restProps }) {
  return <Animation {...restProps}>{children}</Animation>;
};

Jumbotron.Video = function JumbotronVideo({ ...restProps }) {
  return <Video {...restProps} />;
};

Jumbotron.propTypes = {
  direction: PropTypes.string,
};

Jumbotron.defaultProps = {
  direction: 'row',
};

export default Jumbotron;
