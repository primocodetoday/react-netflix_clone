import React from 'react';
import { Accordion } from 'components';
import faqsData from 'constants/faqsData.json';
import { CtaContainer } from './CtaContainer';

export const FaqContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>
            <Accordion.Span>{item.body}</Accordion.Span>
          </Accordion.Body>
        </Accordion.Item>
      ))}
      <CtaContainer />
    </Accordion>
  );
};
