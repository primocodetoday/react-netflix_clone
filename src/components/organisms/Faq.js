import React from 'react';
import { Accordion } from 'components/molecules';
import Cta from 'components/organisms/Cta';
import faqsData from 'constants/faqsData.json';

const Faq = () => {
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
      <Cta />
    </Accordion>
  );
};
export default Faq;
