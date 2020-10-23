import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from 'components';

describe('<Footer /> renders properly', () => {
  it('with data', () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Questions?</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Text>Netflix Poland</Footer.Text>
      </Footer>,
    );

    expect(getByText('Questions?')).toBeTruthy();
    expect(getByText('FAQ')).toBeTruthy();
    expect(getByText('Netflix Poland')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
