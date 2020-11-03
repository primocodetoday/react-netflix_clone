﻿import React from 'react';
import { Title, Container, Inner, Header, Item, Span, Body } from './styles/StyledAccordion';
import { AccordionComposition, AccordionContexType, ComponentProps, HeaderProps } from './Accordion.interface';

const AccordionContext = React.createContext<AccordionContexType | undefined>(undefined);

export const Accordion: React.FC<ComponentProps> & AccordionComposition = ({
  children,
  ...restProps
}: ComponentProps) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }: { children: string }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }: { children: React.ReactNode }) {
  const [toggleShow, setToggleShow] = React.useState(false);

  return (
    <AccordionContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </AccordionContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }: HeaderProps) {
  const { toggleShow, setToggleShow } = useAccordion();

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

Accordion.Body = function AccordionBody({ children, ...restProps }: { children: React.ReactNode }) {
  const { toggleShow } = useAccordion();

  return (
    <Body style={{ maxHeight: toggleShow ? '1200px' : '0px' }} {...restProps} data-testid="faq">
      {children}
    </Body>
  );
};

Accordion.Span = function AccordionSpan({ children, ...restProps }: { children: string }) {
  return <Span {...restProps}>{children}</Span>;
};

export const useAccordion = (): AccordionContexType => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('This component must be used within a <Accordion> component.');
  }
  return context;
};
