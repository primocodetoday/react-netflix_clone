import React from 'react';

import { Container, Title, SubTitle } from './styles/StyledBanner';


interface Composition {
  Title: React.FC<{children: string}>;
  SubTitle: React.FC<{children: string}>;
}

type Props = {
  children: string
}

export const Banner: React.FC<{children: React.FC}> & Composition = ({ children, ...restProps }:{children: React.FC}) => {
  return <Container {...restProps}>{children}</Container>;
};

Banner.Title = function BannerTitle ({ children, ...restProps }: Props) {
  return <Title {...restProps}>{children}</Title>;
};
Banner.SubTitle = function BannerSubTitle({ children, ...restProps }: Props) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
