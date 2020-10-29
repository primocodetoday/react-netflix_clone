import React from 'react';
import { Container, Content, Input, Button } from './styles/StyledCTAForm';

interface ICTAFormComposition {
  Text: React.FC<{children: string}>;
  Input: React.FC<{placeholder: string}>;
  Button: React.FC<{children: string}>;
}

type ComponentProps = {
  children: React.ReactNode
}

export const CTAForm: React.FC<ComponentProps> & ICTAFormComposition = ({ children, ...restProps }: ComponentProps) => {
  return <Container {...restProps}>{children}</Container>;
};

interface TextProps {
  children: string
}

CTAForm.Text = function CTAFormText({ children, ...restProps }:TextProps) {
  return <Content {...restProps}>{children}</Content>;
};

CTAForm.Input = function CTAFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

interface ButtonProps {
  children: string
}

CTAForm.Button = function CTAFormButton({ children, ...restProps }:ButtonProps) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/assets/icons/chevron-right.png" alt="Get Started" />
    </Button>
  );
};
