import React from 'react';

import { Banner } from 'components';
import { render } from '@testing-library/react';

describe('<Banner/> render properly', () => {
  it('with sub-components & children', () => {
    const { container, getByText } = render(
      <Banner>
        <Banner.Title>Unlimited movies</Banner.Title>
        <Banner.SubTitle>Watch anywhere</Banner.SubTitle>
      </Banner>,
    );

    expect(getByText('Unlimited movies')).toBeTruthy();
    expect(getByText('Watch anywhere')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with just a title', () => {
    const { container, queryByText, getByText } = render(
      <Banner>
        <Banner.Title>Unlimited films</Banner.Title>
      </Banner>,
    );

    expect(getByText('Unlimited films')).toBeTruthy();
    expect(queryByText('Watch anywhere')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with just a sub-title', () => {
    const { container, queryByText, getByText } = render(
      <Banner>
        <Banner.SubTitle>Watch anywhere</Banner.SubTitle>
      </Banner>,
    );

    expect(getByText('Watch anywhere')).toBeTruthy();
    expect(queryByText('Unlimited films')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
