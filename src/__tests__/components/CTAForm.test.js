import React from 'react';
import { render, screen } from '@testing-library/react';

import { CTAForm } from 'components';

describe('<CTAForm/> renders properly', () => {
  it('with data', () => {
    const { container } = render(
      <CTAForm>
        <CTAForm.Text>TestString</CTAForm.Text>
        <CTAForm.Input placeholder="Email address" />
        <CTAForm.Button>TRY 30 DAYS FREE</CTAForm.Button>
      </CTAForm>,
    );

    expect(screen.getByText('TestString')).toBeTruthy();
    expect(screen.getByText('TRY 30 DAYS FREE')).toBeTruthy();
    expect(screen.getByPlaceholderText('Email address')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
