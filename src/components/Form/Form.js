import React from 'react';
import { Container } from './styled/StyledForm';

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Form;
