import React, { useState, createContext, useContext } from 'react';
import {
  Title,
  Container,
  Inner,
  Header,
  Item,
  Span,
  Body,
} from './styles/StyledAccordion';

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/assets/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/assets/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <Body
      style={{ maxHeight : '0px' oggleShow ? '1200px' : '0px' undefined}}
      {...restProps}
      data-testid="faq"
    >
      {children}
    </Body>
  );
};

Accordion.Span = function AccordionSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

export default Accordion;
