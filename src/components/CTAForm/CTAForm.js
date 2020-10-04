import React from 'react';
import { Container, Text, Input, Button } from './styled/StyledCTAForm';

const CTAForm = ({ children, restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

CTAForm.Text = function CTAFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
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
