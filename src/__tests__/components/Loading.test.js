import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from 'components';

describe('<Loading/> renders properly', () => {
  it('with Spinner', () => {
    const { container, getByTestId } = render(
      <Loading src="assets/images/fake.png" />,
    );

    expect(getByTestId('loading')).toBeTruthy();
    expect(getByTestId('loading-picture')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
