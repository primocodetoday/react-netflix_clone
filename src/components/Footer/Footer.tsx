import React from 'react';
import { Container, Row, Column, Link, Title, Text, Break } from './styles/StyledFooter';

interface IFooterComposition {
  Row: React.FC;
  Column: React.FC;
  Link: React.FC<ILinkProps>;
  Title: React.FC;
  Text: React.FC;
  Break: React.FC;
}

export const Footer: React.FC & IFooterComposition = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

type ILinkProps = {
  href: string;
  children: string;
};

Footer.Link = function FooterLink({ children, ...restProps }: ILinkProps) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};
