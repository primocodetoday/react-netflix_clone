import React from 'react';
import { LinkProps } from 'react-router-dom';
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles/StyledForm';

interface FormComposition {
  Error: React.FC<ErrorProps>;
  Base: React.FC<BaseProps>;
  Title: React.FC<TitleProps>;
  Text: React.FC<TextProps>;
  TextSmall: React.FC<TextSmallProps>;
  Link: React.FC<LinkProps>;
  Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>>;
  Submit: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

export const Form: React.FC & FormComposition = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export interface ErrorProps {
  children: React.ReactNode;
}

export const FormError: React.FC<ErrorProps> = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};

Form.Error = FormError;

export interface BaseProps {
  children: React.ReactNode;
}

Form.Base = function FormBase({ children, ...restProps }: BaseProps) {
  return <Base {...restProps}>{children}</Base>;
};

export interface TitleProps {
  children: React.ReactNode;
}

Form.Title = function FormTitle({ children, ...restProps }: TitleProps) {
  return <Title {...restProps}>{children}</Title>;
};

export interface TextProps {
  children: React.ReactNode;
}

Form.Text = function FormText({ children, ...restProps }: TextProps) {
  return <Text {...restProps}>{children}</Text>;
};

export interface TextSmallProps {
  children: React.ReactNode;
}

Form.TextSmall = function FormTextSmall({ children, ...restProps }: TextSmallProps) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }: LinkProps) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ ...restProps }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <Input {...restProps} />;
};

Form.Submit = function FormSubmit({ children, ...restProps }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <Submit {...restProps}>{children}</Submit>;
};
