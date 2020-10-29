import React from 'react';
import {
  Title,
  Container,
  Inner,
  Header,
  Item,
  Span,
  Body,
} from './styles/StyledAccordion';

type AccordionContexType = {
  toggleShow: boolean,
  setToggleShow: React.Dispatch<React.SetStateAction<boolean>>
}

type ProviderProps = {children: React.ReactNode}

const ToggleContext = React.createContext<AccordionContexType | undefined>(undefined);

interface AccordionComposition {
  Title: React.FC<TitleProps>;
  Item: React.FC<ProviderProps>;
  Header: React.FC<HeaderProps>;
  Body: React.FC<BodyProps>;
  Span: React.FC<SpanProps>
}

export const Accordion: React.FC & AccordionComposition = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

type TitleProps = {
  children: string
}

Accordion.Title = function AccordionTitle({ children, ...restProps }: TitleProps) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }: ProviderProps) {
  const [toggleShow, setToggleShow] = React.useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

type HeaderProps = {
  bg: boolean,
  isNotBrowse: boolean,
  children: React.ReactNode
}

Accordion.Header = function AccordionHeader ({ children, ...restProps }: HeaderProps) {
  const context = React.useContext(ToggleContext);
  if (context === undefined) {
    throw new Error('Use Context in Provider')
  }
  const {toggleShow, setToggleShow} = context
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

type BodyProps = {
  children: React.ReactNode
}

Accordion.Body = function AccordionBody({ children, ...restProps }: BodyProps) {
  const context = React.useContext(ToggleContext);
  if (context === undefined) {
    throw new Error('Use Context in Provider')
  }
  const {toggleShow} = context

  return (
    <Body
      style={{ maxHeight: toggleShow ? '1200px' : '0px' }}
      {...restProps}
      data-testid="faq"
    >
      {children}
    </Body>
  );
};

type SpanProps = {
  children: string
}

Accordion.Span = function AccordionSpan({ children, ...restProps }:SpanProps) {
  return <Span {...restProps}>{children}</Span>;
};
