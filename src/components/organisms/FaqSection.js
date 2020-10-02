import React from 'react';
import { Accordion } from 'components';
import CTASection from 'components/organisms/CTASection';
import faqsData from 'constants/faqsData.json';

const FaqSection = () => {
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
      <CTASection />
    </Accordion>
  );
};
export default FaqSection;
