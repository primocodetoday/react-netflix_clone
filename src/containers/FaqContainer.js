import React from 'react';
import { Accordion, CTAForm } from 'components';
import faqsData from 'fixtures/faqsData.json';

const FaqContainer = () => {
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
      <CTAForm>
        <CTAForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </CTAForm.Text>
        <CTAForm.Input placeholder="Email address" />
        <CTAForm.Button>GET STARTED</CTAForm.Button>
      </CTAForm>
    </Accordion>
  );
};
export default FaqContainer;
