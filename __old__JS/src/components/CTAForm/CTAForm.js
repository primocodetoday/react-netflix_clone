import React from 'react';
import { Container, Content, Input, Button } from './styles/StyledCTAForm';

const CTAForm = ({ children, restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

CTAForm.Text = function CTAFormText({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

CTAForm.Input = function CTAFormInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

CTAForm.Button = function CTAFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/assets/icons/chevron-right.png" alt="Get Started" />
    </Button>
  );
};

export default CTAForm;
