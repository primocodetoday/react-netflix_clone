import React from 'react';
import { render } from '@testing-library/react';
import faqsData from 'constants/faqsData.json';
import { Accordion } from 'components';

describe('<Accordion />', () => {
  it('renders the <Accordion /> with populated data', () => {
    const { container, getByText } = render(
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
      </Accordion>,
    );

    expect(getByText('Frequently Asked Questions')).toBeTruthy();
    expect(getByText('What is Netflix?')).toBeTruthy();
    expect(getByText('How much does Netflix cost?')).toBeTruthy();
    expect(getByText('Where can I watch?')).toBeTruthy();
    expect(getByText('How do I cancel?')).toBeTruthy();
    expect(getByText('What can I watch on Netflix?')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  // TODO test style props

  // it('opens and closes the <Accordion /> component', () => {
  //   const { component, container, queryByText, queryByTestId } = render(
  //     <Accordion>
  //       {faqsData.map((item) => (
  //         <Accordion.Item key={item.id}>
  //           <Accordion.Header>{item.header}</Accordion.Header>
  //           <Accordion.Body>
  //             <Accordion.Span>{item.body}</Accordion.Span>
  //           </Accordion.Body>
  //         </Accordion.Item>
  //       ))}
  //     </Accordion>,
  //   );

  //   const whatIsNetflixBodyText =
  //     "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";

  //   expect(queryByTestId('#faq').prop('style')).toHaveProperty(
  //     'maxHeight',
  //     '0px',
  //   );
  //   fireEvent.click(queryByText('What is Netflix?'));
  //   expect(queryByText(whatIsNetflixBodyText)).toBeTruthy();

  //   fireEvent.click(queryByText('What is Netflix?'));
  //   expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
  //   // expect(container.firstChild).toMatchSnapshot();
  // });
});
