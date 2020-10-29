import React from 'react';

import { Container, Title, SubTitle } from './styles/StyledBanner';

export const Banner = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Banner.Title = function BannerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Banner.SubTitle = function BannerSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
